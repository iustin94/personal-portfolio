(function() {
    const themeStorageKey = 'user-theme';
    const darkThemeClass = 'dark-mode';
    const lightThemeClass = 'light-mode';
    const toggleButtonSelector = '.theme-toggle';

    function getSavedTheme() {
        return localStorage.getItem(themeStorageKey);
    }

    function saveTheme(theme) {
        localStorage.setItem(themeStorageKey, theme);
    }

    function applyTheme(theme) {
        document.body.classList.remove(darkThemeClass, lightThemeClass);
        if (theme) {
            document.body.classList.add(theme === 'dark' ? darkThemeClass : lightThemeClass);
        }
        updateToggleButton(theme);
    }

    function updateToggleButton(theme) {
        const btn = document.querySelector(toggleButtonSelector);
        if (!btn) return;

        // If no saved theme, detect current state from system preference
        let isDark = false;
        if (theme === 'dark') {
            isDark = true;
        } else if (theme === 'light') {
            isDark = false;
        } else {
            isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        }

        // Update icon instead of text
        const iconClass = isDark ? 'fa-sun' : 'fa-moon';
        btn.innerHTML = `<i class="fa-solid ${iconClass}" aria-hidden="true"></i>`;
        btn.setAttribute('title', isDark ? 'Switch to light mode' : 'Switch to dark mode');
        btn.setAttribute('aria-label', 'Toggle Theme');
    }

    function toggleTheme() {
        const currentTheme = getSavedTheme();
        let nextTheme;

        if (currentTheme) {
            nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
        } else {
            // No saved theme, toggle based on current system preference
            const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            nextTheme = isSystemDark ? 'light' : 'dark';
        }

        saveTheme(nextTheme);
        applyTheme(nextTheme);
    }

    // Initialize theme on load
    document.addEventListener('DOMContentLoaded', () => {
        const savedTheme = getSavedTheme();
        if (savedTheme) {
            applyTheme(savedTheme);
        } else {
            updateToggleButton();
        }

        const btn = document.querySelector(toggleButtonSelector);
        if (btn) {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                toggleTheme();
            });
        }
    });

    // Handle system preference changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (!getSavedTheme()) {
            updateToggleButton();
        }
    });
})();

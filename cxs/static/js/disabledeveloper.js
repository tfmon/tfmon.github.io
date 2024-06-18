// Disable right-click
document.addEventListener('contextmenu', (event) => {
    event.preventDefault();
});

// Attempt to prevent opening of developer tools
window.onresize = function() {
    if ((window.outerHeight - window.innerHeight) > 200) {
        window.location.reload();
    }
}

// 禁用快捷键
document.addEventListener('keydown', function(event) {
    // 禁用 F12
    if (event.keyCode === 123) {
        event.preventDefault();
        return false;
    }

    // 禁用 Ctrl + Shift + I 或 Cmd + Option + I
    if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.keyCode === 73) {
        event.preventDefault();
        return false;
    }

    // 禁用 Ctrl + Shift + C 或 Cmd + Option + C
    if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.keyCode === 67) {
        event.preventDefault();
        return false;
    }

    // 禁用 Ctrl + Shift + J 或 Cmd + Option + J
    if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.keyCode === 74) {
        event.preventDefault();
        return false;
    }
});

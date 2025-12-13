document.addEventListener('DOMContentLoaded', () => {
    const labels = document.querySelectorAll('.continent-label');
    const placeholderView = document.getElementById('placeholder-content-view');
    const placeholderTitle = document.getElementById('placeholder-title');
    const placeholderText = document.getElementById('placeholder-text');
    const closeButton = document.getElementById('close-placeholder-view');

    labels.forEach(label => {
        label.addEventListener('click', (event) => {
            const labelId = label.id;
            // Extract the continent name more reliably, handling the anchor tag for Oceania
            let continentName = '';
            if (labelId === 'label-oceania') {
                const anchor = label.querySelector('a');
                if (anchor && (event.target === anchor || anchor.contains(event.target))) {
                    console.log(`Navigating to About Me page via ${labelId}`);
                    // Allow default navigation for the "About Me" link
                    return;
                }
                // If clicked on the div part of label-oceania, not the link
                continentName = (anchor.textContent || anchor.innerText).replace(/\s*\(.*\)\s*/, '').trim();
            } else {
                continentName = (label.textContent || label.innerText).replace(/\s*\(.*\)\s*/, '').trim();
            }

            event.preventDefault(); // Prevent default for all placeholder display actions

            if (placeholderView && placeholderTitle && placeholderText) {
                placeholderTitle.textContent = `Content for ${continentName}`;
                placeholderText.textContent = `Detailed projects or information for ${continentName} will be shown here. Country-specific interaction will be implemented in the future.`;
                placeholderView.style.display = 'block';
                console.log(`Clicked on ${labelId}. Displaying placeholder content for ${continentName}.`);
            } else {
                console.error('Placeholder elements not found!');
            }
        });
    });

    if (closeButton && placeholderView) {
        closeButton.addEventListener('click', () => {
            placeholderView.style.display = 'none';
            console.log('Placeholder view closed.');
        });
    } else {
        if (!closeButton) console.error('Close button not found!');
        if (!placeholderView) console.error('Placeholder view element not found for close button listener!');
    }
});

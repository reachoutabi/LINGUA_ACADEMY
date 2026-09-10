/**
 * Lingua Academy - Batch Schedule Filterable Timetable Engine
 */

document.addEventListener('DOMContentLoaded', () => {
    const schedSearchInput = document.querySelector('#schedSearchInput');
    const clearSchedSearchBtn = document.querySelector('#clearSchedSearchBtn');
    const resetSchedFiltersBtn = document.querySelector('#resetSchedFiltersBtn');
    const schedCourseFilter = document.querySelector('#schedCourseFilter');
    const schedModeFilter = document.querySelector('#schedModeFilter');
    const schedAgeFilter = document.querySelector('#schedAgeFilter');
    const schedTimingFilter = document.querySelector('#schedTimingFilter');
    const filterChips = document.querySelectorAll('.filter-chip-btn');
    const tableRows = document.querySelectorAll('.schedule-row');
    const mobileCards = document.querySelectorAll('.mobile-schedule-card');
    const noScheduleMsg = document.querySelector('#noScheduleFound');
    const visibleScheduleCount = document.querySelector('#visibleScheduleCount');

    function filterSchedule() {
        const searchQuery = (schedSearchInput ? schedSearchInput.value : '').trim().toLowerCase();
        const course = schedCourseFilter ? schedCourseFilter.value.toLowerCase() : 'all';
        const mode = schedModeFilter ? schedModeFilter.value.toLowerCase() : 'all';
        const age = schedAgeFilter ? schedAgeFilter.value.toLowerCase() : 'all';
        const timing = schedTimingFilter ? schedTimingFilter.value.toLowerCase() : 'all';

        // Toggle clear search button
        if (clearSchedSearchBtn) {
            clearSchedSearchBtn.style.display = searchQuery ? 'block' : 'none';
        }

        // Toggle reset filters button
        const isFiltered = searchQuery !== '' || course !== 'all' || mode !== 'all' || age !== 'all' || timing !== 'all';
        if (resetSchedFiltersBtn) {
            resetSchedFiltersBtn.style.display = isFiltered ? 'inline-block' : 'none';
        }

        // Sync filter chips active state with course dropdown
        filterChips.forEach(chip => {
            const chipFilter = (chip.getAttribute('data-course-filter') || '').toLowerCase();
            if (chipFilter === course) {
                chip.classList.add('active');
            } else {
                chip.classList.remove('active');
            }
        });

        let desktopCount = 0;
        let mobileCount = 0;

        // Desktop Table Rows
        tableRows.forEach(row => {
            const rCourse = (row.getAttribute('data-course') || '').toLowerCase();
            const rMode = (row.getAttribute('data-mode') || '').toLowerCase();
            const rAge = (row.getAttribute('data-age') || '').toLowerCase();
            const rTiming = (row.getAttribute('data-timing') || '').toLowerCase();
            const rowText = (row.innerText || '').toLowerCase();

            const matchCourse = course === 'all' || rCourse.includes(course);
            const matchMode = mode === 'all' || rMode === mode;
            const matchAge = age === 'all' || rAge === age;
            const matchTiming = timing === 'all' || rTiming === timing;
            const matchSearch = !searchQuery || rowText.includes(searchQuery);

            if (matchCourse && matchMode && matchAge && matchTiming && matchSearch) {
                row.style.display = '';
                desktopCount++;
            } else {
                row.style.display = 'none';
            }
        });

        // Mobile & Tablet Cards
        mobileCards.forEach(card => {
            const rCourse = (card.getAttribute('data-course') || '').toLowerCase();
            const rMode = (card.getAttribute('data-mode') || '').toLowerCase();
            const rAge = (card.getAttribute('data-age') || '').toLowerCase();
            const rTiming = (card.getAttribute('data-timing') || '').toLowerCase();
            const cardText = (card.innerText || '').toLowerCase();

            const matchCourse = course === 'all' || rCourse.includes(course);
            const matchMode = mode === 'all' || rMode === mode;
            const matchAge = age === 'all' || rAge === age;
            const matchTiming = timing === 'all' || rTiming === timing;
            const matchSearch = !searchQuery || cardText.includes(searchQuery);

            const col = card.closest('.mobile-schedule-col') || card;
            if (matchCourse && matchMode && matchAge && matchTiming && matchSearch) {
                col.style.display = '';
                mobileCount++;
            } else {
                col.style.display = 'none';
            }
        });

        const activeCount = window.innerWidth < 992 ? mobileCount : desktopCount;

        if (visibleScheduleCount) {
            visibleScheduleCount.innerText = activeCount;
        }

        if (noScheduleMsg) {
            noScheduleMsg.style.display = activeCount === 0 ? 'block' : 'none';
        }
    }

    // Window resize handler for responsive count sync
    window.addEventListener('resize', filterSchedule);

    // Bind dropdowns
    if (schedCourseFilter) schedCourseFilter.addEventListener('change', filterSchedule);
    if (schedModeFilter) schedModeFilter.addEventListener('change', filterSchedule);
    if (schedAgeFilter) schedAgeFilter.addEventListener('change', filterSchedule);
    if (schedTimingFilter) schedTimingFilter.addEventListener('change', filterSchedule);

    // Bind search input
    if (schedSearchInput) {
        schedSearchInput.addEventListener('input', filterSchedule);
    }

    if (clearSchedSearchBtn) {
        clearSchedSearchBtn.addEventListener('click', () => {
            if (schedSearchInput) {
                schedSearchInput.value = '';
                filterSchedule();
            }
        });
    }

    // Bind Quick Filter Chips
    filterChips.forEach(chip => {
        chip.addEventListener('click', () => {
            const selectedCourse = chip.getAttribute('data-course-filter') || 'all';
            if (schedCourseFilter) {
                schedCourseFilter.value = selectedCourse;
            }
            filterSchedule();
        });
    });

    // Reset button
    if (resetSchedFiltersBtn) {
        resetSchedFiltersBtn.addEventListener('click', () => {
            if (schedSearchInput) schedSearchInput.value = '';
            if (schedCourseFilter) schedCourseFilter.value = 'all';
            if (schedModeFilter) schedModeFilter.value = 'all';
            if (schedAgeFilter) schedAgeFilter.value = 'all';
            if (schedTimingFilter) schedTimingFilter.value = 'all';
            filterSchedule();
        });
    }

    // Initial run
    filterSchedule();
});


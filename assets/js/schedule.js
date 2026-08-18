/**
 * Lingua Academy - Batch Schedule Filterable Timetable Engine
 */

document.addEventListener('DOMContentLoaded', () => {
    const schedCourseFilter = document.querySelector('#schedCourseFilter');
    const schedModeFilter = document.querySelector('#schedModeFilter');
    const schedAgeFilter = document.querySelector('#schedAgeFilter');
    const schedTimingFilter = document.querySelector('#schedTimingFilter');
    const tableRows = document.querySelectorAll('.schedule-row');
    const mobileCards = document.querySelectorAll('.mobile-schedule-card');
    const noScheduleMsg = document.querySelector('#noScheduleFound');

    function filterSchedule() {
        const course = schedCourseFilter ? schedCourseFilter.value.toLowerCase() : 'all';
        const mode = schedModeFilter ? schedModeFilter.value.toLowerCase() : 'all';
        const age = schedAgeFilter ? schedAgeFilter.value.toLowerCase() : 'all';
        const timing = schedTimingFilter ? schedTimingFilter.value.toLowerCase() : 'all';

        let count = 0;

        // Desktop Table Rows
        tableRows.forEach(row => {
            const rCourse = (row.getAttribute('data-course') || '').toLowerCase();
            const rMode = (row.getAttribute('data-mode') || '').toLowerCase();
            const rAge = (row.getAttribute('data-age') || '').toLowerCase();
            const rTiming = (row.getAttribute('data-timing') || '').toLowerCase();

            const matchCourse = course === 'all' || rCourse.includes(course);
            const matchMode = mode === 'all' || rMode === mode;
            const matchAge = age === 'all' || rAge === age;
            const matchTiming = timing === 'all' || rTiming === timing;

            if (matchCourse && matchMode && matchAge && matchTiming) {
                row.style.display = '';
                count++;
            } else {
                row.style.display = 'none';
            }
        });

        // Mobile Cards
        mobileCards.forEach(card => {
            const rCourse = (card.getAttribute('data-course') || '').toLowerCase();
            const rMode = (card.getAttribute('data-mode') || '').toLowerCase();
            const rAge = (card.getAttribute('data-age') || '').toLowerCase();
            const rTiming = (card.getAttribute('data-timing') || '').toLowerCase();

            const matchCourse = course === 'all' || rCourse.includes(course);
            const matchMode = mode === 'all' || rMode === mode;
            const matchAge = age === 'all' || rAge === age;
            const matchTiming = timing === 'all' || rTiming === timing;

            if (matchCourse && matchMode && matchAge && matchTiming) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });

        if (noScheduleMsg) {
            noScheduleMsg.style.display = count === 0 ? 'block' : 'none';
        }
    }

    if (schedCourseFilter) schedCourseFilter.addEventListener('change', filterSchedule);
    if (schedModeFilter) schedModeFilter.addEventListener('change', filterSchedule);
    if (schedAgeFilter) schedAgeFilter.addEventListener('change', filterSchedule);
    if (schedTimingFilter) schedTimingFilter.addEventListener('change', filterSchedule);
});

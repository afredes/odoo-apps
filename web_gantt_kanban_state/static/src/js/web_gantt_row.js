odoo.define('web_gantt_kanban_state.GanttRow', function (require) {
    'use strict';

    const GanttRow = require('web_gantt.GanttRow');

    const KSGanttRow = GanttRow.extend({
        template: 'KSGanttView.Row'
    });

    return KSGanttRow;
});

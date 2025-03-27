odoo.define('web_gantt_kanban_state.GanttRenderer', function (require) {
    'use strict';

    const GanttRenderer = require('web_gantt.GanttRenderer');
    const KSGanttRow = require('web_gantt_kanban_state.GanttRow');

    const KSGanttRenderer = GanttRenderer.extend({
        config: Object.assign({}, GanttRenderer.prototype.config, {
            GanttRow: KSGanttRow
        }),
    });

    return KSGanttRenderer;
});

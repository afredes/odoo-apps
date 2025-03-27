odoo.define('web_gantt_kanban_state.GanttView', function (require) {
    'use strict';

    const viewRegistry = require('web.view_registry');
    const GanttView = require('web_gantt.GanttView');
    const KSGanttRenderer = require('web_gantt_kanban_state.GanttRenderer');

    const KSGanttView = GanttView.extend({
        config: Object.assign({}, GanttView.prototype.config, {
            Renderer: KSGanttRenderer,
        }),
    });

    viewRegistry.add('kanban_state_gantt', KSGanttView);
    return KSGanttView;
});

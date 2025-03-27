{
    'name': 'Gantt View with kanban state',
    'version': '1.0',
    'description': '',
    'summary': '',
    'author': 'Alejandro Fredes (https://github.com/afredes)',
    'license': 'LGPL-3',
    'category': 'Project',
    'depends': [
        'project_enterprise'
    ],
    'data': [
        'views/project_task.xml',
    ],
    'auto_install': False,
    'application': False,
    'assets': {
        'web.assets_backend': [
            'web_gantt_kanban_state/static/src/js/*.js',
            'web_gantt_kanban_state/static/src/scss/web_gantt.scss'
        ],
        'web.assets_qweb': [
            'web_gantt_kanban_state/static/src/xml/web_gantt.xml'
        ],
    },
}
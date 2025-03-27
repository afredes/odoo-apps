{
    'name': 'Attachment Counter',
    'version': '1.0',
    'description': '',
    'summary': """
        Add a counter to the attachments in order to be used in the kanban view of projects, tasks, leads, etc.
    """,
    'author': 'afredes',
    'website': 'https://github.com/afredes/odoo-apps',
    'license': 'LGPL-3',
    'category': 'Thecnical',
    'depends': [
        'web'
    ],
    'auto_install': False,
    'application': False,
    'assets': {
        'web.assets_backend': [
            'attachment_counter/static/src/js/attachment_counter.js',
            'attachment_counter/static/src/css/attachment_counter.css'
        ],
    }
}
{
    'name': 'Attachment Counter in Project and Tasks',
    'version': '1.0',
    'description': '',
    'summary': """
        Add a counter to the attachments in order to be used in the kanban view of projects and tasks.
    """,
    'author': 'afredes',
    'website': 'https://github.com/afredes/odoo-apps',
    'license': 'LGPL-3',
    'category': 'Thecnical',
    'depends': [
        'project','attachment_counter'
    ],
    'auto_install': False,
    'application': False,
    'data': [
        'views/project_project.xml',
        'views/project_task.xml',
    ],
}
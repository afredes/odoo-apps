/** @odoo-module **/

const { tags } = owl;
import AbstractField from 'web.AbstractFieldOwl';
import field_registry from 'web.field_registry_owl';

class AttachmentCounter extends AbstractField {
    
    get showWidget() {
        return this.value > 0;
    }
}

AttachmentCounter.template = tags.xml`
    <div>
        <t t-if="showWidget">
            <i class="fa fa-paperclip"/>
            <span t-esc="value" style="padding-left: 0.25rem"/>
        </t>
    </div>
`;
AttachmentCounter.supportedFieldTypes = ['integer'];

field_registry.add('attachment_counter', AttachmentCounter);

export default AttachmentCounter;
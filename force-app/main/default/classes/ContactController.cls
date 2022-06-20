public with sharing class ContactController {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContact() {
        return [select Name from Contact LIMIT 5];
    }
}

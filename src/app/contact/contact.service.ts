import {Injectable} from '@angular/core';
import {Observable} from "rxjs";

export class Contact {
    constructor(public id: number, public name: string, public lastname: string) {
    }
}

const CONTACT: Array<Contact> = [
    new Contact(1, 'Tonton', 'Flingeur'),
    new Contact(1, 'John', 'Doe'),
    new Contact(1, 'Steven', 'Seagal'),
    new Contact(1, 'Elvis', 'Bert')
];

@Injectable()
export class ContactService {
    public contacts: Array<Contact> = CONTACT;
    /**
     * Fetch the list of Contact - Simulate a timeout of 3 seconds.
     * @returns {Observable<Array<Contact>>}
     */
    getContacts(): Observable<Array<Contact>> {
        return Observable.create((observer) => {
            setTimeout(() => {
                observer.next(CONTACT);
                observer.complete();
            }, 3000);
        });
    }

    /**
     * Fetch a Contact by id
     * @param id
     * @returns {Observable<Contact>}
     */
    getContact(id: number): Observable<Contact> {
        return Observable.create((observer) => {
            setTimeout(() => {
                observer.next(this.contacts.find(contact => contact.id === id ))
            },3000)
        })
    }

}

import {Injectable} from '@angular/core';
import {Observable} from "rxjs";

export class Contact {
    constructor(public id: number, public firstname: string, public lastname: string) {
    }
}

const CONTACT: Array<Contact> = [
    new Contact(1, 'Tonton', 'Flingeur'),
    new Contact(2, 'John', 'Doe'),
    new Contact(3, 'Steven', 'Seagal'),
    new Contact(4, 'Elvis', 'Bert')
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
            }, 1000);
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
                observer.next(this.contacts.find(contact => contact.id === +id));
                observer.complete();
            },1000)
        })
    }

}

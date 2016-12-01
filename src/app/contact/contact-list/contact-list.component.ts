import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {Router, ActivatedRoute} from '@angular/router';

import {Contact, ContactService} from '../contact.service';

@Component({
    selector: 'app-contact-list',
    templateUrl: './contact-list.component.html',
    styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit, OnDestroy {
    private _contactSubscription: Subscription;
    public contacts: Array<Contact>;
    private _selectedId: number;

    constructor(private _contactService: ContactService,
                private _router: Router,
                private _route: ActivatedRoute) {
    }

    ngOnInit() {
        this._contactSubscription = this._contactService.getContacts()
            .subscribe(contacts => this.contacts = contacts);
    }

    ngOnDestroy() {
        this._contactSubscription.unsubscribe();
    }

    isSelected(contact: Contact) {
        return this._selectedId === contact.id
    }

    onSelect(contact: Contact) {
        this._selectedId = contact.id;
        // Navigate with relative Link. Default: ['/contact', contact.id]
        this._router.navigate([contact.id], {relativeTo: this._route})
    }

}

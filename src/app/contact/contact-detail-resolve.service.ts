import {Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, Router} from '@angular/router';
import {ContactDetailComponent} from './contact-detail/contact-detail.component';
import {ContactService} from './contact.service';

@Injectable()
export class ContactDetailResolveService implements Resolve<ContactDetailComponent> {

    constructor(private _contactService: ContactService,
                private _router: Router) {
    }

    resolve(route: ActivatedRouteSnapshot) {
        let id = route.params['id'];
        return this._contactService.getContact(id).map(contact => {
            if (contact)
                return contact;
            else { // id not found
                this._router.navigate(['/contact']);
                return false;
            }
        })
    }
}

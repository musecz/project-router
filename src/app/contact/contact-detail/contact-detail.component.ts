import {Component, OnInit, HostBinding, trigger, transition, animate, style, state} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {Contact} from '../contact.service';
import {DialogService} from "../../shared/dialog.service";

@Component({
    selector: 'app-contact-detail',
    templateUrl: './contact-detail.component.html',
    styleUrls: ['./contact-detail.component.css'],
    animations: [
        trigger('routeAnimation', [
            state('shown',
                style({
                    opacity: 1,
                    transform: 'translateX(0)'
                })
            ),
            state('hidden',
                style({
                    opacity: 0,
                    transform: 'translateX(0)'
                })
            ),
            transition('hidden => shown', [
                style({
                    opacity: 0,
                    transform: 'translateX(-100%)'
                }),
                animate('0.2s ease-in')
            ]),
            transition('shown => hidden', [
                animate('0.5s ease-out', style({
                    opacity: 0,
                    transform: 'translateY(100%)'
                }))
            ])
        ])
    ]
})
export class ContactDetailComponent implements OnInit {
    @HostBinding('@routeAnimation') get routeAnimation() {
        return true;
    }

    public contact: Contact;
    public editFirstname: string;
    public editLastname: string;

    constructor(private _route: ActivatedRoute,
                private _router: Router,
                public dialogService: DialogService) {
    }

    ngOnInit() {
        this._route.data
            .subscribe((data: {contact: Contact}) => {
                this.contact = data.contact;
                this.editFirstname = data.contact.firstname;
                this.editLastname = data.contact.lastname;
            });
    }

    cancel() {
        this.goToContact();
    }

    save() {
        this.contact.firstname = this.editFirstname;
        this.contact.lastname = this.editLastname;
        this.goToContact();
    }

    canDeactivate(): Promise<boolean> | boolean {
        // Allow synchronous navigation (`true`) if no contact or the contact is unchanged
        if (!this.contact || (this.contact.firstname === this.editFirstname && this.contact.lastname === this.editLastname)) {
            return true;
        }
        // Otherwise ask the us er with the dialog service and return its
        // promise which resolves to true or false when the user decides
        return this.dialogService.confirm('Discard changes?');
    }

    goToContact() {
        this._router.navigate(['../'], {relativeTo: this._route});
    }
}

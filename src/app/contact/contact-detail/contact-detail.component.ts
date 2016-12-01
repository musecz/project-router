import {Component, OnInit, HostBinding, trigger, transition, animate, style, state} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {Contact} from '../contact.service';

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

    private _selectedId: number;
    public contact: Contact;
    public editFirstname: string;
    public editLastname: string;

    constructor(private _route: ActivatedRoute,
                private _router: Router) {
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

    goToContact() {
        this._router.navigate(['../'], {relativeTo: this._route});
    }
}

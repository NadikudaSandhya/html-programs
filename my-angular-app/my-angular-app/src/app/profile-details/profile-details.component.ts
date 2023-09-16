import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProfileService, Profile } from '../profile.service';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
})
export class ProfileDetailsComponent implements OnInit {
  profile:any
  constructor(
    private route: ActivatedRoute,
    private profileService: ProfileService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = Number(params.get('id'));
      const profile = this.profileService.getProfileById(id);

      if (profile) {
        // Only update this.profile if a valid profile object is returned
        this.profile = profile;
      } else {
        // Handle the case when the profile with the given ID is not found
        // You can redirect to an error page or show a message to the user
        console.error('Profile not found');
      }
    });
  }
}

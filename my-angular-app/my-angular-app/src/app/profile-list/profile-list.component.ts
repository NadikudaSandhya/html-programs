import { Component, OnInit } from '@angular/core';
import { ProfileService, Profile } from '../profile.service';

@Component({
  selector: 'app-profile-list',
  templateUrl: './profile-list.component.html',
})
export class ProfileListComponent implements OnInit {
  profiles: Profile[] = [];
  selectedProfile: Profile | null = null;

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.profileService.getProfiles().subscribe((profiles) => {
      this.profiles = profiles;
    });
  }

  selectProfile(profile: Profile): void {
    this.selectedProfile = profile;
  }

  clearSelection(): void {
    this.selectedProfile = null;
  }
}

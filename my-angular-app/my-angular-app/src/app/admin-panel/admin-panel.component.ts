import { Component, OnInit } from '@angular/core';
import { ProfileService, Profile } from '../profile.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
})
export class AdminPanelComponent implements OnInit {
  profiles: Profile[] = [];
  newProfile: Profile = { id: 0, name: '', description: '', address: '' };

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.loadProfiles();
  }

  loadProfiles(): void {
    this.profileService.getProfiles().subscribe((profiles) => {
      this.profiles = profiles;
    });
  }

  addProfile(): void {
    this.profileService.addProfile(this.newProfile).subscribe(() => {
      this.loadProfiles();
      this.newProfile = { id: 0, name: '', description: '', address: '' };
    });
  }

  editProfile(profile: Profile): void {
    this.profileService.updateProfile(profile).subscribe(() => {
      this.loadProfiles();
    });
  }

  deleteProfile(id: number): void {
    this.profileService.deleteProfile(id).subscribe(() => {
      this.loadProfiles();
    });
  }
}

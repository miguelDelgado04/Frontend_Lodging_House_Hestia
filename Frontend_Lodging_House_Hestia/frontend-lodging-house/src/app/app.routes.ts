import { Routes } from '@angular/router';

import { CreateAccountViewComponent } from './components/create-account-view/create-account-view';
import { ConfirmationOfCreatingUserViewComponent } from './components/confirmation-of-creating-user-view/confirmation-of-creating-user-view';
import { LoginViewComponent } from './components/login-view/login-view';
import { LoginErrorViewComponent } from './components/login-error-view/login-error-view';
import { PasswordRecoveryViewComponent } from './components/password-recovery-view/password-recovery-view';
import { AccountRecoveryCodeViewComponent } from './components/account-recovery-code-view/account-recovery-code-view';
import { PasswordChangeViewComponent } from './components/password-change-view/password-change-view';
import { UserProfileViewComponent } from './components/user-profile-view/user-profile-view';
import { HostProfileViewComponent } from './components/host-profile-view/host-profile-view';
import { HostAccommodationListViewComponent } from './components/host-accommodation-list-view/host-accommodation-list-view';
import { HostingDeletionConfirmationViewComponent } from './components/hosting-deletion-confirmation-view/hosting-deletion-confirmation-view';
import { View1OfCreatingALodgingComponent } from './components/view1-of-creating-alodging/view1-of-creating-alodging';
import { View2OfCreatingALodgingComponent } from './components/view2-of-creating-alodging/view2-of-creating-alodging';
import { View3OfCreatingALodgingComponent } from './components/view3-of-creating-alodging/view3-of-creating-alodging';
import { HostingCreationConfirmationViewComponent } from './components/hosting-creation-confirmation-view/hosting-creation-confirmation-view';

//import { UserAccommodationDetailsViewComponent } from './components/user-accommodation-details-view/user-accommodation-details-view';

import { ApplicationMainViewComponent } from './components/application-main-view/application-main-view';
import { ReservationCreationViewComponent } from './components/reservation-creation-view/reservation-creation-view';
import { ReservationConfirmationViewComponent } from './components/reservation-confirmation-view/reservation-confirmation-view';
import { BookingSuccessViewComponent } from './components/booking-success-view/booking-success-view';
import { BackupFailureViewComponent } from './components/backup-failure-view/backup-failure-view';
import { ReservationHistoryViewComponent } from './components/reservation-history-view/reservation-history-view';
import { CancelReservationViewComponent } from './components/cancel-reservation-view/cancel-reservation-view';
import { HostMetricsViewComponent } from './components/host-metrics-view/host-metrics-view';
import { SystemErrorViewComponent } from './components/system-error-view/system-error-view';

export const routes: Routes = [
  { path: 'createAccountView', component: CreateAccountViewComponent },
  { path: 'confirmationOfCreatingUserView', component: ConfirmationOfCreatingUserViewComponent },
  { path: 'loginViewComponent', component: LoginViewComponent },
  { path: 'loginErrorViewComponent', component: LoginErrorViewComponent },
  { path: 'passwordRecoveryViewComponent', component: PasswordRecoveryViewComponent },
  { path: 'accountRecoveryCodeViewComponent', component: AccountRecoveryCodeViewComponent },
  { path: 'passwordChangeViewComponent', component: PasswordChangeViewComponent },
  { path: 'userProfileViewComponent', component: UserProfileViewComponent },
  { path: 'hostProfileViewComponent', component: HostProfileViewComponent },
  { path: 'hostAccommodationListViewComponent', component: HostAccommodationListViewComponent },
  { path: 'hostingDeletionConfirmationViewComponent', component: HostingDeletionConfirmationViewComponent },
  { path: 'view1OfCreatingALodgingComponent', component: View1OfCreatingALodgingComponent },
  { path: 'view2OfCreatingALodgingComponent', component: View2OfCreatingALodgingComponent },
  { path: 'view3OfCreatingALodgingComponent', component: View3OfCreatingALodgingComponent },
  { path: 'hostingCreationConfirmationViewComponent', component: HostingCreationConfirmationViewComponent },

  //{ path: 'userAccommodationDetailsViewComponent', component: UserAccommodationDetailsViewComponent },

  { path: 'applicationMainViewComponent', component: ApplicationMainViewComponent },
 
  { path: 'reservationCreationViewComponent', component: ReservationCreationViewComponent },
  { path: 'reservationConfirmationViewComponent', component: ReservationConfirmationViewComponent },
  { path: 'bookingSuccessViewComponent', component: BookingSuccessViewComponent },
  { path: 'backupFailureViewComponent', component: BackupFailureViewComponent },
  
  { path: 'reservationHistoryViewComponent', component: ReservationHistoryViewComponent },
  { path: 'cancelReservationViewComponent', component: CancelReservationViewComponent },
  { path: 'hostMetricsViewComponent', component: HostMetricsViewComponent },
  { path: 'systemErrorViewComponent', component: SystemErrorViewComponent },

];
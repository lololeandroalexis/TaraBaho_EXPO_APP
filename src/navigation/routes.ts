export type Role = 'seeker' | 'employer';
export type ScreenDef = { name: string; title: string; node: string; role?: Role };

// Auth flow (job hunter page)
export const authScreens: ScreenDef[] = [
  { name: 'Signup', title: 'Signup', node: '4:60' },
  { name: 'ForgotPassword', title: 'Forgot Password', node: '53:2' },
  { name: 'ResetPassword', title: 'Reset Password', node: '58:36' },
];

// Job hunter perspective — page 0:1
export const seekerScreens: ScreenDef[] = [
  { name: 'SeekerHome', title: 'Home Page', node: '79:4', role: 'seeker' },
  { name: 'SeekerMenu', title: 'Menu', node: '61:80', role: 'seeker' },
  { name: 'SeekerSearch', title: 'Search Bar', node: '132:8', role: 'seeker' },
  { name: 'AllJobs', title: 'All Jobs (Remote / On site / Full-time / Part-time)', node: '152:2', role: 'seeker' },
  { name: 'JobDetails', title: 'Job Details', node: '141:199', role: 'seeker' },
  { name: 'CompanyDetails', title: 'Company Details', node: '302:318', role: 'seeker' },
  { name: 'ApplyJob', title: 'Apply Job', node: '382:30', role: 'seeker' },
  { name: 'ApplicationSubmitted', title: 'Application Submitted', node: '396:253', role: 'seeker' },
  { name: 'MyApplications', title: 'My Applications', node: '136:5', role: 'seeker' },
  { name: 'ApplicationDetails', title: 'Application Details', node: '175:250', role: 'seeker' },
  { name: 'SavedJobs', title: 'Saved Jobs', node: '345:1090', role: 'seeker' },
  { name: 'SeekerMessages', title: 'Messages', node: '239:2', role: 'seeker' },
  { name: 'SeekerNotifications', title: 'Notification Bar', node: '79:303', role: 'seeker' },
  { name: 'MyResume', title: 'My Resume', node: '146:245', role: 'seeker' },
  { name: 'SeekerReviews', title: 'Reviews & Feedback', node: '460:2', role: 'seeker' },
  { name: 'SeekerProfile', title: 'Profile Page', node: '499:1178', role: 'seeker' },
  { name: 'SeekerSettings', title: 'Settings', node: '368:702', role: 'seeker' },
];

// Employer perspective — page 466:151
export const employerScreens: ScreenDef[] = [
  { name: 'EmployerHome', title: 'Home Page', node: '466:208', role: 'employer' },
  { name: 'EmployerMenu', title: 'Menu', node: '625:560', role: 'employer' },
  { name: 'PostJob', title: 'Post a Job', node: '470:470', role: 'employer' },
  { name: 'PostJobRequirements', title: 'Post a Job – Requirements', node: '470:654', role: 'employer' },
  { name: 'PostJobReview', title: 'Post a Job – Review', node: '487:816', role: 'employer' },
  { name: 'ManageJobPosts', title: 'Manage Job Posts', node: '804:2', role: 'employer' },
  { name: 'ManageInterviews', title: 'Manage Interviews', node: '804:22', role: 'employer' },
  { name: 'ApplicantsList', title: 'Applicants List', node: '549:22', role: 'employer' },
  { name: 'ApplicantDetails', title: 'Applicant Details', node: '575:165', role: 'employer' },
  { name: 'ApplicantShortlist', title: 'Applicant Details – Shortlist', node: '558:15', role: 'employer' },
  { name: 'ApplicantHired', title: 'Applicant Details – Hired', node: '569:561', role: 'employer' },
  { name: 'ManageEmployees', title: 'Manage All Employees', node: '777:176', role: 'employer' },
  { name: 'EmployerMessages', title: 'Messages', node: '770:70', role: 'employer' },
  { name: 'EmployerChat', title: 'Message', node: '643:3', role: 'employer' },
  { name: 'EmployerReviews', title: 'Reviews & Feedback', node: '575:699', role: 'employer' },
  { name: 'ReviewSubmitted', title: 'Review Submitted', node: '625:95', role: 'employer' },
  { name: 'EmployerProfile', title: 'Profile Page', node: '575:822', role: 'employer' },
  { name: 'EmployerSettings', title: 'Settings', node: '625:613', role: 'employer' },
];

export type RootParamList = Record<string, any> & {
  Landing: undefined; Login: undefined; Signup: undefined; ForgotPassword: undefined; ResetPassword: undefined; ScreenIndex: undefined;
};

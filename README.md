# Fyle Frontend Challenge

## Project is live at: https://undercoder567.github.io/fyle-internship-challenge-23/

## Documentation of testing
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ApiService } from './services/api.service';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let apiService: jasmine.SpyObj<ApiService>;

  beforeEach(async () => {
    const apiServiceSpy = jasmine.createSpyObj('ApiService', ['getUser', 'getRepos', 'getPaginatedRepos']);

    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [{ provide: ApiService, useValue: apiServiceSpy }]
    }).compileComponents();

    apiService = TestBed.inject(ApiService) as jasmine.SpyObj<ApiService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should call getUser and getRepos methods of ApiService on ngOnInit', () => {
    const userResponse = { name: 'John Doe', avatar_url: 'image-url' };
    const reposResponse = [{ name: 'repo1' }, { name: 'repo2' }];

    apiService.getUser.and.returnValue(of(userResponse));
    apiService.getRepos.and.returnValue(of(reposResponse));

    component.ngOnInit();

    expect(apiService.getUser).toHaveBeenCalledWith('johnpapa');
    expect(apiService.getRepos).toHaveBeenCalledWith('johnpapa');
  });

  // Add more test cases for other methods
});

## This is the code to test service and component below i will guide how to run it.
## Install Dependencies: Make sure you have Node.js and npm installed on your system.

## Install Angular CLI: If you haven't installed Angular CLI globally, you can do so by running the following command:
npm install -g @angular/cli

## Install Project Dependencies: Run the following command to install all the necessary dependencies:
npm i

## Run Unit Tests: To execute the unit tests, use the following command:
ng test

## View Test Results: After running the tests, you can view the test results in the terminal/command prompt. Additionally, a browser window will open with the Karma test runner interface, showing the test results in a graphical format.

## Interpreting Test Results
### Passing Tests: Green checkmarks indicate that the tests have passed successfully.
### Failing Tests: Red cross marks indicate that the tests have failed. Review the error messages and stack traces to identify the cause of failure.
### Coverage Report: After running the tests, you can also find a coverage report in the terminal/command prompt. This report shows the percentage of code coverage by the unit tests.

## Additional Notes
Ensure that the AppComponent and ApiService files have corresponding spec.ts files for their unit tests.
Update the test files (spec.ts) with appropriate mock responses and test cases to achieve 100% code coverage.
Make sure all dependencies are properly installed and up-to-date before running the tests.
By following these steps, you can successfully run the unit tests for the Angular application and verify the functionality and reliability of the components and services.

## Who is this for?

This challenge is meant for candidates who wish to intern at Fyle and work with our engineering team. The candidate should be able to commit to at least 6 months of dedicated time for internship.

## Why work at Fyle?

Fyle is a fast-growing Expense Management SaaS product. We are ~40 strong engineering team at the moment. 

We are an extremely transparent organization. Check out our [careers page](https://careers.fylehq.com) that will give you a glimpse of what it is like to work at Fyle. Also, check out our Glassdoor reviews [here](https://www.glassdoor.co.in/Reviews/Fyle-Reviews-E1723235.htm). You can read stories from our teammates [here](https://stories.fylehq.com).

## Challenge outline

This challenge involves implementing application using github api. 

The services that you need to use are already implemented - check out ApiService.

You can see details of this challenge [here](https://fyleuniverse.notion.site/fyleuniverse/Fyle-Frontend-development-challenge-cb5085e5e0864e769e7b98c694400aaa)

__Note__ - This challenge is in angular. We work on angular frameworks & after you join we expect the same from you. Hence it is required to complete this assignement in angular itself.

## What happens next?

You will hear back within 48 hours from us via email.

## Installation

1. Fork this repository to your github account.
2. Clone the forked repository and proceed with steps mentioned below.

### Install requirements
* Install angular cli [Ref](https://angular.io/cli)
* `npm install` in this repository 

## Development server

Run `ng serve` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Further help

Visit the [Angular Documentation](https://angular.io/guide/styleguide) to learn more.
Styling is to be strictly done with [Tailwind](https://tailwindcss.com/docs/installation).

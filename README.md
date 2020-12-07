This extra small demo illustrates that if you're mutating object propertly, change detection won't run for children which have that object as input.

Also it proofs that markForCheck() marks only the component, not the component with all the childrens.

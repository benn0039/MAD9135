# Multiview List

## Assignment Requirements
Create an Angular JS SPA that uses Angular Tabs, multiple views, and local storage which maintains three lists.

This web app is similar to the first ToDo List except that there is a tab menu with three tabs. Clicking on each tab will display a different list. 

Each list needs to be saved in the local modal data PLUS in local storage.

Each list needs to be able to add and delete items, just like the first ToDo List.

Clicking one of the three tabs will load the appropriate view and fill the list with the local model data for that list. The local model data must be kept in sync with local storage.

When the app starts, and when changing views it should check local storage and sync the data for the current list.

## Notes

Originally decided that I would use one data model and filter the model on the active view instead of a distinct model for each view but as I got deeper into the assignment I realized it may make more sense to use a single view and filter the array based on the active category. 
Writing a frontend, single page app in JavaScript
===============================

### [Makers Academy](https://makers.tech/) :: [Week 7 Pairing Challenge](https://github.com/makersacademy/course/tree/master/further_javascript)

### Challenge Track :

### Notes app :

The task is to build a notes app as a frontend, single page web app. You'll be guided through this by the high-level challenges listed below.  However, there will be no walkthroughs.

#### Learning objectives :
```
+ Write unit tests without using a testing library.
+ Use the constructor and prototype pattern.
```

#### Writing tests without a testing library :

##### What is a test?
```
A test does two things :

+  Sets some conditions up.
+  Checks that some things are true.
```

##### What are testing libraries for?
```
A testing library supplies :

+  Mocking functions to help isolate the part of the code being tested.
+  Assertion functions that help check that specific things are true.
+  A standard way to describe what a test or group of tests is doing.
+  A way to organise tests.
+  An easy way to run lots of tests.
```

#### User Stories :

![Notes app home page mockup](images/notes-home-page-mock-up.png)
![Notes app note page mockup](images/notes-note-page-mock-up.png)

```
As a programmer
I can see a list of my notes, where each note is abbreviated to the first 20 characters
So I can find the one I want
```

```
As a programmer
I can create a new note
So I can record something I need to remember
```

```
As a programmer
I can see the full text of an individual note on its own page
So I can see all the information in the note
```

(NB: notes do not need to be permanently stored.  If the user refreshes their web page, they'll lose their notes, and that's fine.)

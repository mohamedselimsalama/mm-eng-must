# Notes For myself 

- We will not use electron anymore since electron is based on chromium build, But Why ?
  Chromuim doesn't have the speech recognition feature in the chrom browser, and we need this feature in order
  to control spotify since alexa doesn't support it out of the box 
  
  So We will use the server only mode with the Magic Mirror by starting the command with 
  ```
  node serveronly 
  ```
  
- If we do this we will still have 2 issues 
  1. the full screen mode ~
     the main point of using electron is we can make the window in fullscreen mode and hide the title bar 
     but how we can achive this when we using the chrome browser in the rasperry os 
     
     We will fix this by launching the browser with a custom flag ```--kiosk```
     This flag will force the window to be without a title bar and in full screen mode 
     
  2. The launching with the Magic Mirror app 
     and this is a simple issue we can trigger the launching chrome with our custom flag form  a bash file or from a node script 
     
     

     
     

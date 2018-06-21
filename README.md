# Images Downloader

An interactive Command-Line Interface Build in NodeJS for downloading a single or multiple images to disk from URL. 


<p align="center"> 
<img src="screenshots/test.gif"  >
</p>

# Install

```

yarn add global img-cli

```

# Command Topics
### img all

```
USAGE
  $ img all 

Required
  URL: website target

OPTIONS
  -d, --directory          choose a specific directory name and/or path 
  -t, --type               Choose a image type (png, jpg, gif..)
  
EXAMPLES
  $ img all http://karimation.com
  
  $ img all http://karimation.com -d myDir -t png

```

### img solo

```
USAGE
  $ img solo 

Required
  URL:                     image URL target

OPTIONS
  -d, --directory          choose a specific directory name and/or path 
  
EXAMPLES
  $ img solo https://avatars1.githubusercontent.com/u/21101482
  
  $ img solo https://avatars1.githubusercontent.com/u/21101482 -d myImg
  
```

# Questions?

Feel free to contact <a href="http://www.karimation.com">me</a> or create an issue.

# Author

kerim selmi <a href="http://www.karimation.com">karimation</a>

# License

<a href="LICENSE">MIT License</a>
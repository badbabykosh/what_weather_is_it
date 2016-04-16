# what_weather_is_it
what is the local weather situation

### Deployment
$ aws s3 sync . s3://whatweather/ --exclude ".git/*" --exclude "*.idea/*" --exclude "*.DS_Store"

Note: gist - https://gist.github.com/badbabykosh/830f65be6614974a9a93
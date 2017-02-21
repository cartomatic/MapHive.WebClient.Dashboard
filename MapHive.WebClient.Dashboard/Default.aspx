<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="MapHive.WebClient.Dashboard.Default" Async="true" %>

<!DOCTYPE HTML>
<html manifest="">
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=10, user-scalable=yes">

    <title>Dashboard@MapHive</title>
    
    <!--Client cfg-->
    <script runat=server>
    protected string GetTime()
    {
        return DateTime.Now.Ticks.ToString();
    }
    </script>
    <script src="ClientConfiguration.ashx?t=<%=GetTime()%>"></script>
    
    <!--splash screen-->
    <link rel="stylesheet" href="splash/splash.css" type="text/css">
    <script src="splash/splash.js"></script>
    
    <script type="text/javascript">
        var Ext = Ext || {}; // Ext namespace won't be defined yet...

        // This function is called by the Microloader after it has performed basic
        // device detection. The results are provided in the "tags" object. You can
        // use these tags here or even add custom tags. These can be used by platform
        // filters in your manifest or by platformConfig expressions in your app.
        //
        Ext.beforeLoad = function (tags) {
            var s = location.search,  // the query string (ex "?foo=1&bar")
                profile;

            // For testing look for "?classic" or "?modern" in the URL to override
            // device detection default.
            //
            if (s.match(/\bclassic\b/)) {
                profile = 'classic';
            }
            else if (s.match(/\bmodern\b/)) {
                profile = 'modern';
            }
            else {
                profile = tags.desktop ? 'classic' : 'modern';
                //profile = tags.phone ? 'modern' : 'classic';
            }

            Ext.manifest = profile; // this name must match a build profile name

            // This function is called once the manifest is available but before
            // any data is pulled from it.
            //
            //return function (manifest) {
                // peek at / modify the manifest object
            //};
        };
    </script>


    <!-- The line below must be kept intact for Sencha Cmd to build your application -->
    <script id="microloader" data-app="f8843a3e-02cf-4b80-9ea3-aef08c7c6c38" type="text/javascript" src="bootstrap.js"></script>

</head>
<body></body>
</html>
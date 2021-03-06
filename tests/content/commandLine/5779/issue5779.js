function runTest()
{
    FBTest.sysout("issue5779.START");
    FBTest.openNewTab(basePath + "commandLine/5779/issue5779.html", function(win)
    {
        FBTest.openFirebug();
        FBTest.clearCache();
        FBTest.enableConsolePanel(function(win)
        {
            var tasks = new FBTest.TaskList();

            tasks.push(FBTest.executeCommandAndVerify,
                "$('div');",
                "<div class=\"test\">",
                "a", "objectLink-element");

            tasks.push(FBTest.executeCommandAndVerify,
                "$$('div');",
                "[div.test, div#root, div.rootdiv1, div.rootdiv2]",
                "pre", "objectBox-array");

            tasks.push(FBTest.executeCommandAndVerify,
                "$('div', document.getElementById('root'));",
                "<div class=\"rootdiv1\">",
                "a", "objectLink-element");

            tasks.push(FBTest.executeCommandAndVerify,
                "$$('div', document.getElementById('root'));",
                "[div.rootdiv1, div.rootdiv2]",
                "pre", "objectBox-array");

            tasks.run(function() {
                FBTest.testDone("issue5779.DONE");
            });
        });
    });
}

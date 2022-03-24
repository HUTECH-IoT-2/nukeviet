
<!-- BEGIN: language -->
<!-- <div class="language">
    {SELECT_LANGUAGE}:
    <select name="lang" class="nv_change_site_lang">
         BEGIN: langitem 
            <option value="{LANGSITEURL}" title="{SELECTLANGSITE}">{LANGSITENAME}</option>
         END: langitem 
         BEGIN: langcuritem 
            <option value="{LANGSITEURL}" title="{SELECTLANGSITE}" selected="selected">{LANGSITENAME}</option>
         END: langcuritem 
    </select>
</div> -->

<!-- END: language -->
<!-- BEGIN: main -->

<div class="container">
    <div class="wraper">
        <div id="header">
            <div class="logo">
                <a title="{SITE_NAME}" href="{THEME_SITE_HREF}"><img src="{LOGO_SRC}" alt="{SITE_NAME}"></a>
                <!-- BEGIN: site_name_h1 -->
                <h1>{SITE_NAME}</h1>
                <h2>{SITE_DESCRIPTION}</h2>
                <!-- END: site_name_h1 -->
                <!-- BEGIN: site_name_span -->
                <span class="site_name">{SITE_NAME}</span>
                <span class="site_description">{SITE_DESCRIPTION}</span>
                <!-- END: site_name_span -->
            </div>
            <!-- <div class="right-ads">
                [HEAD_RIGHT]
            </div> -->
        </div>
    </div>
</div>
<!-- END: main -->
<!-- BEGIN: main -->
{FILE "header_only.tpl"}
{FILE "header_extended.tpl"}
<div class="row">
	<!-- [HEADER] -->
</div>
<div class="row">
    <div class="col-sm-18 col-md-19 col-sm-push-6 col-md-push-5">
        <div class="vnkhangcot-parallax" style="background-image: url('https://lh4.googleusercontent.com/ppOqg6fa5NmT2Huzp244BGiraazxRx7I7kx21Hou98kzJZ5kN4ra58tXdJuhgRJqSrj8GE90cd04BNpVmTPNAtU=w16383');">
          
        <div class="test" style="padding: 50px;">
            <h1 style="color: white; text-align: center; font-size: 40px;">OLYMPIC TIN HỌC SINH VIÊN VIỆT NAM LẦN THỨ 30
                & KỲ THI LẬP TRÌNH SINH VIÊN QUỐC TẾ ICPC ASIA HANOI 
                
                ĐẠI HỌC FPT, từ 22-25/03/2022</h1>
        </div>
          
            [logobanner]
        </div>
        {MODULE_CONTENT}
        [FOOTER]
    </div>
	<div class="col-sm-6 col-md-5 col-sm-pull-18 col-md-pull-19 vnkhangcot-black-sidebar">
        <!--Test-->
        <div class="section-header">
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
        <!-- Endtest -->
        <!-- [logobanner]
		[LEFT]
        [MENUSITE] -->
<!-- Begin Test sidenav -->
<div class="section-nav">

        <nav class="second-nav" id="menusite">

                <div class="row">
                    
                        [MENU_SITE]
                    
                </div>

        </nav>

</div>
<!-- End Test sidenav -->

	</div>
</div>
<!-- <div class="row">
	
</div> --> 
{FILE "footer_extended.tpl"}
{FILE "footer_only.tpl"}
<!-- END: main -->
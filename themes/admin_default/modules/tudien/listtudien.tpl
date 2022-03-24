<!-- BEGIN: main -->
<!-- BEGIN: error -->
<div class="alert alert-danger">{ERROR}</div>
<!-- END: error -->
<div class="table-responsive">
    <table class="table table-striped table-bordered table-hover">
        <thead>
            <tr>
                <th class="w300 text-center">Từ tiếng Anh</th>
                <th class="w150 text-center">Từ tiếng Việt</th>
            </tr>
        </thead>
        <tbody>
            <!-- BEGIN: loop -->
            <tr>
                <td>{TUDIEN.word_en}</td>
                <td>{TUDIEN.word_vn}</td>
            </tr>
            <!-- END: loop -->
        </tbody>
        <!-- BEGIN: generate_page -->
        <tfoot>
        </tfoot>
        <!-- END: generate_page -->
    </table>
</div>
<!-- END: main -->
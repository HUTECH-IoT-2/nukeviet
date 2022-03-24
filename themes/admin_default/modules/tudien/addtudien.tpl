<!-- BEGIN: main -->
<div>
    <!-- BEGIN: error -->
    <div class="alert alert-danger">{ERROR}</div>
    <!-- END: error -->
    <form action="{FORM_ACTION}" method="post">
        <div class="row">
            <div class="col-sm-24 col-md-18">
                <div class="table-responsive">
                    <table class="table table-striped table-bordered
                        table-hover">
                        <colgroup>
                            <col class="w200" />
                            <col />
                        </colgroup>
                        <tbody>
                            <tr>
                                <td class="text-right"> Từ tiếng anh <sup
                                        class="required">(*)</sup></td>
                                <td><input required class="w300 form-control
                                        pull-left" type="text" name="input_word_en"
                                        maxlength="250" />&nbsp;<span
                                        class="text-middle"></td>
                                </tr>
                                <tr>
                                    <td class="text-right">Từ tiếng việt:<sup
                                            class="required">(*)</sup></td>
                                    <td><input required class="w300 form-control
                                            pull-left" type="text"
                                            name="input_word_vn"
                                            maxlength="250" />&nbsp;<span
                                            class="text-middle"></td>
                                </tr>   
                            </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="row text-center"><input type="submit"
                        value="Lưu" name="submit"
                        class="btn btn-primary" />
                </div>
            </form>
        </div>
        <!-- END: main -->
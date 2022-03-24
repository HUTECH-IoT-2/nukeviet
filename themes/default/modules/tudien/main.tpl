<!-- BEGIN: main -->
<!-- <div class="content">
    <div style="height:400px;">
        <form method="post" action="{FORM_ACTION}">
            <label>{LANG.height}: </label><input name='input_height' type="text" value="{HEIGHT}" class="form-control" >
            <label>{LANG.weight}: </label><input name='input_weight' type="text" value="{WEIGHT}" class="form-control">
            </br><Label>{LANG.total_bmi}: <label>{TOTAL_BMI}</label></Label>
            </br><Label>{LANG.diagnostic}: <label>{DIAGNOSTIC}</label></Label>
            </br><label>{ESTIMATE}</label></Label>
            </br><input type="submit" name="submit" value="RUN" class="btn btn-primary">
        </form>
    </div>
</div> -->
<form name="bmiForm" method="post" action="{FORM_ACTION}">
  <div class="bmi-calculator">
    <h1 style="margin-bottom: 0.5em;color: #0a7be9; font-size: 40px;">Từ Điển Anh - Việt</h1>
    <table class="post-table">
      
      <tbody>
        <tr>
          <td class="text-right text-strong">{LANG.input_test}</td>
          <td>
            <input type="text" name="area" value="{DATA.area}" class="form-control" style="color: #0a7be9;">
          </td>
          <td>
            <select name="guest_gender" class="form-control w100" style="width: 128px;">
              <!-- BEGIN: gender -->
              <option value="{GENDER.key}" {GENDER.selected}>{GENDER.language}</option>
              <!-- END: gender -->
            </select>
          </td>
          <td><input class="gumb" type="submit" name="submit" value="Tra Từ" style="margin-top: 0.5em; border-radius: 20px;font-size: 10px;"></td>
        </tr>
      </tbody>
    </table>
    <p style="font-size: 1.2em;">

      </br><Label>{LANG.tuvuanhap}: <label>{TOTAL_BMI}</label></Label>

      </br><Label>{LANG.ketqua}: <label>{DIAGNOSTIC}</label></Label>
    </p> 
  </div>
</form>
<!-- END: main -->
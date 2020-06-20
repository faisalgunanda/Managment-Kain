@section('js')
<script>
    $(document).ready(function () {
        "use strict";
        $("#kontol")
        .DataTable({
            responsive: !1,
            columnDefs: [{ orderable: !0, targets: 0}],
            sdom: "<'row'<f l>><t><'row'<p i>>",
            oLanguage: { sLengthMenu: "_MENU_", sSearch: "" },
            aLengthMenu: [
            [4, 10, 15, 20],
            [4, 10, 15, 20],
            ],
            order: [[1, "asc"]],
            // bInfo: !1,
            // pageLength: 4,
        });
    });

</script>
import Module from "@/scripts/module";
import "@/scripts/jquery-plugin";


$(document).ready(function () {

    new Module({
        param1: 1,
        param2: 2
    });

    $(document).plugin({
        param1: 1,
        param2: 2
    });
});
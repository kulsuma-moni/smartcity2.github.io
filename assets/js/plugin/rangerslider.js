// Ranger Slider 1
var $range = $(".js-range-slider"),
    $inputFrom = $(".js-input-from"),
    $inputTo = $(".js-input-to"),
    instance,
    min = 0,
    max = 100000,
    from = 0,
    to = 0;

$range.ionRangeSlider({
	skin: "round",
    type: "double",
    min: min,
    max: max,
    from: 200,
    to: 80000,
    onStart: updateInputs,
    onChange: updateInputs
});
instance = $range.data("ionRangeSlider");

function updateInputs (data) {
	from = data.from;
    to = data.to;
    
    $inputFrom.prop("value", from);
    $inputTo.prop("value", to);	
}

$inputFrom.on("input", function () {
    var val = $(this).prop("value");
    
    // validate
    if (val < min) {
        val = min;
    } else if (val > to) {
        val = to;
    }
    
    instance.update({
        from: val
    });
});

$inputTo.on("input", function () {
    var val = $(this).prop("value");
    
    // validate
    if (val < from) {
        val = from;
    } else if (val > max) {
        val = max;
    }
    
    instance.update({
        to: val
    });
});

// Ranger slider 2
var $range_2 = $(".js-range-slider_2"),
    $inputFrom_2 = $(".js-input-from_2"),
    $inputTo_2 = $(".js-input-to_2"),
    instance_2,
    min = 0,
    max = 8000,
    from = 0,
    to = 0;

$range_2.ionRangeSlider({
	skin: "round",
    type: "double",
    min: min,
    max: max,
    from: 200,
    to: 5000,
    onStart: updateInputs_2,
    onChange: updateInputs_2
});
instance_2 = $range_2.data("ionRangeSlider");

function updateInputs_2 (data) {
	from = data.from;
    to = data.to;
    
    $inputFrom_2.prop("value", from);
    $inputTo_2.prop("value", to);	
}

$inputFrom_2.on("input", function () {
    var val = $(this).prop("value");
    
    // validate
    if (val < min) {
        val = min;
    } else if (val > to) {
        val = to;
    }
    
    instance_2.update({
        from: val
    });
});

$inputTo_2.on("input", function () {
    var val = $(this).prop("value");
    
    // validate
    if (val < from) {
        val = from;
    } else if (val > max) {
        val = max;
    }
    
    instance_2.update({
        to: val
    });
});


/**
 *
 * @Author Scott Campbell
 * @Website github.com/scottc/
 * @Version 1.3.0
 * @License GPLv3
 *
 */

(function ($) {
    $.fn.enableplaceholder = function () {

        if ('placeholder' in document.createElement('input'))
            return this;

        return this.each(function () {
            var $this = $(this);
            
            if ($this.val() == "")
                $this.val($this.attr("placeholder"));

            $this
                .focus(function () {
                    if ($this.val() == $this.attr("placeholder"))
                        $this.val("");
                })
                .blur(function () {
                    if ($this.val() == "")
                        $this.val($this.attr("placeholder"));
                });

            $this.closest("form")
                .bind("reset", function () {
                    $this.val($this.attr("placeholder"));
                    return false;
                })
                .bind("submit", function () {
                    if ($this.val() == $this.attr("placeholder")){
                        $this.val("");
                        setTimeout(function(){
                            $this.val($this.attr("placeholder"));
                        }, 0);
                    }
                });
        });
    };
})(jQuery);

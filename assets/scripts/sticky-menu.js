/* 
 * Autor = Diego Rodríguez Suárez-Bustillo
 * Fecha = 17-may-2015
 * Licencia = gpl30
 * Version = 1.0
 * Descripcion = 
 */

/* 
 * Copyright (C) 2015 Diego Rodríguez Suárez-Bustillo
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

$(function () { // document ready

    var stickyTop = $('.sticky').offset().top; // returns number 

    $(window).scroll(function () { // scroll event  

        var windowTop = $(window).scrollTop(); // returns number

        if (stickyTop < windowTop) {
            $('.sticky').css({position: 'fixed', top: 0, zIndex: 999, paddingLeft: '0', paddingRight: '30px'});
            $('.sticky').addClass('container');
            $('.placeholder').css({display: 'inline'});
            $('.navbar-brand').addClass('opened');
            $('.navbar-brand').removeClass('closed');
        }
        else {
            $('.sticky').css({position: 'static', top: 0, zIndex: 0, paddingLeft: 'auto', paddingRight: '0'});
            $('.sticky').removeClass('container');
            $('.placeholder').css({display: 'none'});
            $('.navbar-brand').addClass('closed');
            $('.navbar-brand').removeClass('opened');
        }

    });

});
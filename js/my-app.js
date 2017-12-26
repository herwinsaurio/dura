// Initialize your app
var myApp = new Framework7({
	swipePanel: 'left',
	swipeBackPage: false,
});

// Export selectors engine
var $$ = Dom7;


// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});
$$(document).on('pageInit', function (e) {
	/*$(".swipebox").swipebox();
	$(".videocontainer").fitVids();*/
	var i = 0;
	$("#loadmore").click(function(){
		i++;
		if(i<5) {
			var html = '';
			html += '<div class="card post-card"><div class="card-header"><div class="post-avatar"><img src="images/photos/avatar.jpg" width="34" height="34"></div><div class="post-name">John Doe</div><div class="post-date">Monday at 2:15 PM</div></div><div class="card-content"><div class="card-content-inner"><h4 class="title-post"><a href="single.html">The eye should learn to listen before it looks.</a></h4><img src="images/photos/5.jpg" width="100%" class="img"><p>What a nice photo i took yesterday! Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin et augue nec ex facilisis pulvinar.</p><p class="color-gray infos">Likes: 112  -  Comments: 43</p></div></div><div class="card-footer no-border"><a href="#" class="link">Like</a><a href="#" class="link">Comment</a><a href="#" class="link">Share</a></div></div>';
			$('#blog-page').append(html);
			
		}else{
			$("#loadmore").hide();
		}
	});
        $('#calcular').on('click',function(){
		var a = 0;
		$('.respuesta').each(function(index,item){
			if($(item).is(':checked')){
				a += parseInt($(item).val());
			}
		});
		if(a <= 15){
			alert('Hay obstaculos que tienes que vencer para aumentar tu autoestima');
		}else if(a > 16 && a <=25){
			alert('Estas en camino. Te quedan algunos puntos importantes para desarrollar');
		}else if(a > 26 && a <=36){
			alert('Ya tienes una autoestima respetable');
		}
	});
        $('#calcular1').on('click',function(){
		var a = 0;
		$('.respuesta1').each(function(index,item){
			if($(item).is(':checked')){
				a += parseInt($(item).val());
			}
		});
		if(a <= 15){
			alert('PLATICA CON TU PAREJA, revisa las reglas de tu relación.');
		}else if(a > 16 && a <=25){
			alert('ESTÁS VIVIENDO VIOLENCIA Tu relación tiene señales de abuso de poder.');
		}else if(a > 26 && a <=36){
			alert('¡CUIDADO! Pide asesoría y apoyo, tu seguridad puede estar en riesgo.');
		}
    });
    
    $$('.pregunta1').on('click', function () {
        var popupHTML = '<div class="popup">' +
                '<div class="content-block">' +
                '<p>Es cualquier tipo de da&ntilde;o f&iacute;sico, sexual o psicol&oacute;gico y emocional dirigido hacia las mujeres, el cual puede o&nbsp; no incluir amenazas en que sean cometido esos actos sobre ellas, as&iacute; como la coacci&oacute;n (obligar a alguien de forma f&iacute;sica o psicol&oacute;gica a decir o hacer algo que no quiere). As&iacute; como la privaci&oacute;n arbitraria de la libertad tanto as&iacute; se produzcan todos estos hechos o amenazad en la vida p&uacute;blica como en la privada</p>' +
                '<br />' +
                '<p>De acuerdo a la Organizaci&oacute;n Mundial de la Salud (OMS): &ldquo;<em>El uso deliberado de la fuerza f&iacute;sica o el poder, ya sea en grado de amenaza o efectivo, contra uno mismo, otra persona o un grupo o comunidad, que cause o tenga muchas probabilidades de causar lesiones, muerte, da&ntilde;os psicol&oacute;gicos, trastornos del desarrollo o privaciones</em></p>' +
                '<br />' +
                '<p><a href="#" class="close-popup">Regresa a preguntas mas frecuentes</a></p>' +
                '</div>' +
                '</div>';
        myApp.popup(popupHTML);
    });
    $$('.pregunta2').on('click', function () {
        var popupHTML = '<div class="popup">' +
                '<div class="content-block">' +
                '<p>Aquellas personas que hayan sufrido alg&uacute;n da&ntilde;o de &nbsp;cualquier tipo, ya sea f&iacute;sico, mental, econ&oacute;mico, emocional, o en general, cualquiera que ponga en peligro o lesione sus bienes o derechos como consecuencia de la comisi&oacute;n de un delito.</p>' +
                '<br />' +
                '<p><a href="#" class="close-popup">Regresa a preguntas mas frecuentes</a></p>' +
                '</div>' +
                '</div>';
        myApp.popup(popupHTML);
    });  
    $$('.pregunta3').on('click', function () {
        var popupHTML = '<div class="popup">' +
                '<div class="content-block">' +
                '<p>A los familiares o aquellas personas &nbsp;a cargo de la v&iacute;ctima que tengan relaci&oacute;n inmediata con la misma y que se vean afectados como consecuencia de la comisi&oacute;n de un delito&nbsp; contra&nbsp; aquella.</p>' +
                '<br />' +
                '<p><a href="#" class="close-popup">Regresa a preguntas mas frecuentes</a></p>' +
                '</div>' +
                '</div>';
        myApp.popup(popupHTML);
    }); 
     $$('.pregunta4').on('click', function () {
        var popupHTML = '<div class="popup">' +
                '<div class="content-block">' +
                '<p>Cuando nos referimos a tipos, hacemos menci&oacute;n a las manifestaciones expl&iacute;citas (acto) en las que se presenta un acto de violencia. Mientras que la modalidad es el &aacute;mbito social d&oacute;nde se ejecuta la violencia,&nbsp; es dentro de &eacute;ste donde se llevan a cabo los tipos de violencia</p>' +
                '<br />' +
                '<p><a href="#" class="close-popup">Regresa a preguntas mas frecuentes</a></p>' +
                '</div>' +
                '</div>';
        myApp.popup(popupHTML);
    }); 
    $$('.pregunta5').on('click', function () {
        var popupHTML = '<div class="popup">' +
                '<div class="content-block">' +
                '<p>Cuando nos referimos a tipos, hacemos menci&oacute;n a las manifestaciones expl&iacute;citas (acto) en las que se presenta un acto de violencia. Mientras que la modalidad es el &aacute;mbito social d&oacute;nde se ejecuta la violencia,  es dentro de &eacute;ste donde se llevan a cabo los tipos de violencia</p>' +
                '<br />' +
                '<p><a href="#" class="close-popup">Regresa a preguntas mas frecuentes</a></p>' +
                '</div>' +
                '</div>';
        myApp.popup(popupHTML);
    }); 
    $$('.pregunta6').on('click', function () {
        var popupHTML = '<div class="popup">' +
                '<div class="content-block">' +
                '<p>F&iacute;sica, psicoemocional, sexual, econ&oacute;mica, contra los derechos reproductivos, patrimonial, feminicida.</p>' +
                '<br />' +
                '<p><a href="#" class="close-popup">Regresa a preguntas mas frecuentes</a></p>' +
                '</div>' +
                '</div>';
        myApp.popup(popupHTML);
    });
    $$('.pregunta7').on('click', function () {
        var popupHTML = '<div class="popup">' +
                '<div class="content-block">' +
                'Familiar, comunidad, laboral e institucional.' +
                '<br />' +
                '<p><a href="#" class="close-popup">Regresa a preguntas mas frecuentes</a></p>' +
                '</div>' +
                '</div>';
        myApp.popup(popupHTML);
    });
    $$('.pregunta8').on('click', function () {
        var popupHTML = '<div class="popup">' +
                '<div class="content-block">' +
                '¡Claro!, no solo por la condición de género,  sino que, tenemos derechos por el hecho de ser seres humanos al igual que los demás. Tenemos las obligación de hacerlos válidos.' +
                '<br />' +
                'Estos son:' +
                '<br />' +
                '<ul><li>Derecho a la Igualdad de G&eacute;nero,</li><li>Derecho a la Educaci&oacute;n,</li><li>Derecho a la Salud,</li><li>Derechos Sexuales y Reproductivos,</li><li>Derecho a una Vida Sin Violencia,</li><li>Derecho al Trabajo,</li><li>Derecho al Desarrollo,</li><li>Derecho a la Participaci&oacute;n Pol&iacute;tica,</li><li>Derecho a un Medio Ambiente Sano,</li><li>Derecho a la Informaci&oacute;n</li></ul>' +
                '<p><a href="#" class="close-popup">Regresa a preguntas mas frecuentes</a></p>' +
                '</div>' +
                '</div>';
        myApp.popup(popupHTML);
    });
    $$('.pregunta9').on('click', function () {
        var popupHTML = '<div class="popup">' +
                '<div class="content-block">' +
                '<p>Baja autoestima, ya que la dimensi&oacute;n tradicional de la autoestima de las mujeres es dependiente o subsidiaria a partir de la estima de los otros. Es decir, si una mujer est&aacute; viviendo una situaci&oacute;n violenta, la actitud del opresor influir&aacute; en su toma de decisiones y sentimientos de amor apropio, llev&aacute;ndola a un abismo de dudas y culpabilidad.</p>' +
                '<br />' +
                '<p>Miedo, que bloquea y hace que desaparezcan las palabras de nuestra mente. Esta reacci&oacute;n a veces tiene que ver con mensajes de rechazo que alguna vez hemos recibido y a los que nosotras asociamos otros mensajes de rechazo que elaboramos. Es paralizante, bloquea la creatividad.</p>' +
                '<br />' +
                '<p>Culpa, que es un sofisticado y eficaz mecanismo de control. La culpa se reduce a trav&eacute;s de castigos que se &ldquo;piensan&rdquo; son responsabilidad de uno misma. Es un sentimiento que imposibilita la toma de decisiones para actuar en contra del ciclo de violencia.</p>' +
                '<p><a href="#" class="close-popup">Regresa a preguntas mas frecuentes</a></p>' +
                '</div>' +
                '</div>';
        myApp.popup(popupHTML);
    });
    $$('.pregunta10').on('click', function () {
        var popupHTML = '<div class="popup">' +
                '<div class="content-block">' +
                '<p><ul><li>Baja autoestima</li><li>Sentido de impotencia</li><li>Temor en la toma de decisiones</li><li>Enfermedades ocasionadas por la tensi&oacute;n</li><li>Insomnio</li><li>P&eacute;rdida de apetito</li><li>Ser complaciente en extremo</li><li>Sentido de culpabilidad por la situaci&oacute;n</li><li>Aislamiento</li><li>Miedo paralizador</li></ul></p>' +
                '<br />' +
                '<p><a href="#" class="close-popup">Regresa a preguntas mas frecuentes</a></p>' +
                '</div>' +
                '</div>';
        myApp.popup(popupHTML);
    });
    $$('.pregunta11').on('click', function () {
        var popupHTML = '<div class="popup">' +
                '<div class="content-block">' +
                '<p>Puede ser visualizado a trav&eacute;s de las etapas del ciclo de violencia, las cuales, si no se detectan a tiempo pueden constituir un c&iacute;rculo vicioso del que dif&iacute;cilmente te atrever&aacute;s a salir.</p>' +
                '<br />' +
                '<ol><li>Acumulaci&oacute;n de tensi&oacute;n</li></ol><ul><li>Conflictos menores</li><li>Temor ante la llegada del agresor</li><li>Intento sin &eacute;xito de la v&iacute;ctima de agradar al agresor para evitar problemas</li><li>Maltrato psicol&oacute;gico y quiz&aacute;s alg&uacute;n maltrato f&iacute;sico</li><li>Esperanza de que el comportamiento agresivo cese</li></ul><ol><li>Agresi&oacute;n</li></ol><ul><li>Un incidente violento grave que la v&iacute;ctima no logra detener</li><li>Puede ser desencadenado por cualquier tipo de desacuerdo con la pareja, por peque&ntilde;o que pueda parecer</li><li>Es la etapa donde m&aacute;s mujeres buscan ayuda y salen de las relaciones violentas</li></ul><ol><li>Reconciliaci&oacute;n</li></ol><ul><li>El agresor pide perd&oacute;n y promete que nunca volver&aacute; a agredir y a maltrata</li><li>El agresor hace regalos y compromisos de rehabilitaci&oacute;n</li><li>La mujer reconsidera sus razones para no abandonar la relaci&oacute;n y decide ofrecer otra oportunidad, a veces, no muy esperanzada</li></ul>' +
                '<br />' +
                '<p><a href="#" class="close-popup">Regresa a preguntas mas frecuentes</a></p>' +
                '</div>' +
                '</div>';
        myApp.popup(popupHTML);
    });
    
    $$('.derecho1').on('click', function () {
        var popupHTML = '<div class="popup">' +
                '<div class="content-block">' +
                '<p>Nadie puede discriminarte por ser mujer. Nadie puede excluirte ni restringirte nada que viole tu libertad y tus derechos&nbsp; por cuesti&oacute;n de g&eacute;nero, sin importar el estado civil, edad, condici&oacute;n socioecon&oacute;mica.</p>' +
                '<br />' +
                '<p>Cualquier distinci&oacute;n, exclusi&oacute;n o restricci&oacute;n con base en el sexo, que limite el ejercicio de tus derechos, es considerado un acto de discriminaci&oacute;n en contra de la mujer.</p>' +
                '<br />' +
                '<p><a href="#" class="close-popup">Regresa a tus derechos</a></p>' +
                '</div>' +
                '</div>';
        myApp.popup(popupHTML);
    });
    
     $$('.derecho2').on('click', function () {
        var popupHTML = '<div class="popup">' +
                '<div class="content-block">' +
                '<p>Todas las mujeres tienen derecho a tener las mismas posibilidades de acceso a la educaci&oacute;n que los hombres, a la misma calidad, nivel, escuelas, a las mismas oportunidades de capacitarse y a recibir los mismos ex&aacute;menes, carreras, materias, becas, programas de estudios y calidad de los materiales y la ense&ntilde;anza que los varones.</p>' +
                '<br />' +
                '<p><a href="#" class="close-popup">Regresa a tus derechos</a></p>' +
                '</div>' +
                '</div>';
        myApp.popup(popupHTML);
    });
    
    $$('.derecho3').on('click', function () {
        var popupHTML = '<div class="popup">' +
                '<div class="content-block">' +
                '<p>Tienes derecho a ser atendida de forma respetuosa y digna por parte de los servicios de salud, a que se te brinde toda la informaci&oacute;n necesaria sobre los servicios o atenciones que recibes, adem&aacute;s de que&nbsp; se te consulte en todo momento sobre tu deseo y consentimiento a someterte o no a cualquier intervenci&oacute;n o tratamiento.</p>' +
                '<br />' +
                '<p><a href="#" class="close-popup">Regresa a tus derechos</a></p>' +
                '</div>' +
                '</div>';
        myApp.popup(popupHTML);
    });
    
    $$('.derecho4').on('click', function () {
        var popupHTML = '<div class="popup">' +
                '<div class="content-block">' +
                '<p>En todo momento tienes derecho a decidir libremente, de manera responsable e informada el n&uacute;mero de hijos-as que deseas tener, el m&eacute;todo anticonceptivo que deseas utilizar as&iacute; como a no ser presionada, forzada o ridiculizada por ninguna persona sobre las decisiones, elecciones tienes y tomas sobre tu vida sexual y/o reproductiva. Tambi&eacute;n, tienes todo el derecho a decidir, cuando, donde, de qu&eacute; forma y con quien te vinculas sexualmente.</p>' +
                '<br />' +
                '<p>Adem&aacute;s a no ser v&iacute;ctima de agresiones, insultos o sobajamientos y/o pr&aacute;cticas que ejercida por m&eacute;dicos, funcionarios p&uacute;blicos o cualquier var&oacute;n,&nbsp; que vulneren o pongan en riesgo tu dignidad e integridad f&iacute;sica y emocional.</p>' +
                '<br />' +
                '<p><a href="#" class="close-popup">Regresa a tus derechos</a></p>' +
                '</div>' +
                '</div>';
        myApp.popup(popupHTML);
    });
    
    $$('.derecho5').on('click', function () {
        var popupHTML = '<div class="popup">' +
                '<div class="content-block">' +
                '<p>Toda mujer tiene el derecho a no ser sometida a tortura, tratos crueles, inhumanos ni degradantes. De igual manera, nadie tiene derecho a hablarte con palabras humillantes o denigrantes, sea en p&uacute;blico o en privado. Adem&aacute;s, tienes derecho a denunciar esos tratos si llegasen a suceder, ya que la autoridad tiene la obligaci&oacute;n de protegerte a ti como a los tuyos.</p>' +
                '<br />' +
                '<p><a href="#" class="close-popup">Regresa a tus derechos</a></p>' +
                '</div>' +
                '</div>';
        myApp.popup(popupHTML);
    });
    
    $$('.derecho6').on('click', function () {
        var popupHTML = '<div class="popup">' +
                '<div class="content-block">' +
                '<p>Tienes derecho a recibir el mismo salario que los hombres por el mismo trabajo realizado. A no ser despedida por estar embarazada o que se te pida alguna&nbsp; prueba de embarazo para conseguir empleo. Adem&aacute;s de tener acceso a las mismas capacitaciones, asensos y formaci&oacute;n que los hombres as&iacute; como nadie puede limitarte ning&uacute;n derecho en tu trabajo por cuesti&oacute;n de tu sexo.</p>' +
                '<br />' +
                '<p><a href="#" class="close-popup">Regresa a tus derechos</a></p>' +
                '</div>' +
                '</div>';
        myApp.popup(popupHTML);
    });
    
     $$('.derecho7').on('click', function () {
        var popupHTML = '<div class="popup">' +
                '<div class="content-block">' +
                '<p>Sin posibilidades de desarrollo, todos los derechos se ven comprometidos. Por eso, todas las mujeres tienen el derecho a poseer bienes y propiedades. A tener igualdad en el acceso a servicios, recursos econ&oacute;micos, materiales y oportunidades de participaci&oacute;n, para que crezcan&nbsp; puedan crecer y desarrollarse como personas.</p>' +
                '<br />' +
                '<p><a href="#" class="close-popup">Regresa a tus derechos</a></p>' +
                '</div>' +
                '</div>';
        myApp.popup(popupHTML);
    });
    
     $$('.derecho8').on('click', function () {
        var popupHTML = '<div class="popup">' +
                '<div class="content-block">' +
                '<p>Es el principio para ser ciudadana, la posibilidad de participar en la vida pol&iacute;tica de nuestras comunidades, a ser representada pero tambi&eacute;n a ser representante y voz de otros y otras.</p>' +
                '<br />' +
                '<p><a href="#" class="close-popup">Regresa a tus derechos</a></p>' +
                '</div>' +
                '</div>';
        myApp.popup(popupHTML);
    });
    
     $$('.derecho9').on('click', function () {
        var popupHTML = '<div class="popup">' +
                '<div class="content-block">' +
                '<p>Tienes derecho a vivir en un ambiente digno, en condiciones adecuadas de limpieza, seguridad etc. Abarca el agua, los alimentos, el aire, pero tambi&eacute;n las ciudades y espacios donde nos desenvolvemos.</p>' +
                '<br />' +
                '<p><a href="#" class="close-popup">Regresa a tus derechos</a></p>' +
                '</div>' +
                '</div>';
        myApp.popup(popupHTML);
    });
    
     $$('.derecho10').on('click', function () {
        var popupHTML = '<div class="popup">' +
                '<div class="content-block">' +
                '<p>Esto es el derecho de todas&nbsp; a manifestar sus ideas, a generar informaci&oacute;n pero tambi&eacute;n a recibir la de forma libre y que lo que difunde respete la dignidad de las mujeres y no las degrade.</p>' +
                '<br />' +
                '<p><a href="#" class="close-popup">Regresa a tus derechos</a></p>' +
                '</div>' +
                '</div>';
        myApp.popup(popupHTML);
    });

    /*=== Default Violencia General ===*/
    var myPhotoBrowserDark = myApp.photoBrowser({
        photos: [
            'images/info/info-1.png',
            'images/info/info-2.png',
            'images/info/Info-3.png',
            'images/info/Info-4.png',
            'images/info/Info-5.png',
            'images/info/Info-6.png',
            'images/info/Info-7.png',
            'images/info/Info-8.png',
            'images/info/Info-9.png',
            'images/info/Info-10.png',
            'images/info/Info-11.png',
            'images/info/Info-12.png',
            'images/info/Info-13.png',
            'images/info/Info-14.png',
            'images/info/Info-15.png',
        ],
        theme: 'dark',
        backLinkText: 'Regresar',
    });
//Open photo browser on click
    $$('.pb-standalone-dark').on('click', function () {
        myPhotoBrowserDark.open();
    });
    
     /*=== Default Violencia Pareja ===*/
    var myPhotoBrowserDark2 = myApp.photoBrowser({
        photos: [
            'images/info/Info-Vio_rel-de-pareja-1.png',
            'images/info/Info-Vio-rel-pareja-2.png',
            'images/info/Info-Vio-rel-pareja-3.png',
            'images/info/Info-Vio-rel-pareja-4.png',
            'images/info/Info-Vio-rel-pareja-5.png',
        ],
        theme: 'dark',
        backLinkText: 'Regresar',
    });
//Open photo browser on click
    $$('.pb-standalone-dark2').on('click', function () {
        myPhotoBrowserDark2.open();
    });
    
     /*=== Default Violencia Familia ===*/
    var myPhotoBrowserDark3 = myApp.photoBrowser({
        photos: [
            'images/info/Info-Vio-familia-1.png',
            'images/info/Info-Vio-familia-2.png',
        ],
        theme: 'dark',
        backLinkText: 'Regresar',
    });
//Open photo browser on click
    $$('.pb-standalone-dark3').on('click', function () {
        myPhotoBrowserDark3.open();
    });
    
     /*=== Default Violencia Calle ===*/
    var myPhotoBrowserDark4 = myApp.photoBrowser({
        photos: [
            'images/info/violencia-en-la-calle-1.png',
            'images/info/violencia-en-la-calle-2.png',
        ],
        theme: 'dark',
        backLinkText: 'Regresar',
    });
//Open photo browser on click
    $$('.pb-standalone-dark4').on('click', function () {
        myPhotoBrowserDark4.open();
    });
    /*=== Default Violencia Calle ===*/
    var myPhotoBrowserDark5 = myApp.photoBrowser({
        photos: [
            'images/info/riesgo-vio-mex-1.png',
            'images/info/riesgo-vio-mex-2.png',
            'images/info/riesgo-vio-mex-3.png',
            'images/info/riesgo-vio-mex-4.png',
        ],
        theme: 'dark',
        backLinkText: 'Regresar',
    });
//Open photo browser on click
    $$('.pb-standalone-dark5').on('click', function () {
        myPhotoBrowserDark5.open();
    });

});

      



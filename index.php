<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
<head>
    <title>TEST</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <link rel="stylesheet" type="text/css" href="css/animate.css">
    <script type="text/javascript" src="js/jqueryui/jquery-ui.js"></script>
    <script type="text/javascript" src="js/AngularJS/angular.min.js"></script>
    <script type="text/javascript" src="js/AngularJS/angular-animate.min.js"></script>
    <script type="text/javascript" src="js/AngularJS/Controller/myApp.js"></script>
    
</head>    
<body ng-app="myApp">
<div class="wrapper"  >
    <div id="elementsQt" >
        <div class="col-left video">
            <div ng-controller="slideVideo" >
                <a href="" ng-click="afficher()">Afficher la video</a>
                <div ng-show="affiche" class="embed-responsive embed-responsive-16by9 video ng-enter">
                    <iframe width="853" height="480" src="https://www.youtube.com/embed/f6ZlPAzB8nk" frameborder="0" allowfullscreen></iframe>
                    <a href="inscription.php">page inscription</a>
                </div>
            </div>
        </div>

        <div class="Commentaires" ng-controller="SlideController">
            <h3 class="view animated " >Liste Commentaire</h3>

            <div class="tabComs" ng-repeat="commentaire in commentaires" >
                
                <div class="com colore3">    
                    <div>
                        <span class="auteur">{{commentaire.t_utilisateur.util_pseudo}}</span>
                        <span class="comDate">{{commentaire.t_utilisateur.util_date_poste}}</span>
                    </div>
                    <div>
                    {{commentaire.commentaire.txt_commentaire}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</body>
</html>
<style>
    .wrapper
    {
        padding-top: 50px;
        background-color: orange;
        text-align: center;
    }
    .global {
        margin-left: auto;
        margin-right: auto;
        width: 1980px; /* largeur obligatoire pour être centré */
    }
    .QtHead{
        color:white;
        font-size: 20px;
        font-weight: bold;

    }

    #elementsQt{
        padding-top: 20px;
    }
    .colore1 {
        background-color: #eea236;
    }
    .input{
        margin:0px;
    }
    .colore3{
        background-color : #FFF6E5;
        border-radius: 2px;
    }
    .col-right{
        display: inline-block;
        width: 500px;
        padding: 5px;
        margin: 5px;
        vertical-align: top;
    }
    .tabComs{
        display: inline-block;
        width: 800px;
    }
    .tabComs .com {
        text-align: left;
        padding: 10px;
        box-shadow:
            0px 2px 2px 0px rgba(0, 0, 0, 0.5) inset,
            0px 2px 2px 0px rgba(255, 255, 255, 0.5);
        margin: 2.5px;
    }
    .tabComs .com .auteur{
        font-weight: bold;
    }
    .tabComs .com .comDate{
        font-size: 10px;
        color :#666;
    }

    .tabsComs th{
        width: 100px;
    }
    .col-left{
        display: inline-block;
        width: 853px;
        padding: 5px;
        margin: 5px;
        vertical-align: top;
    }
    
    .video .ng-enter{
        -webkit-animation: bounceInLeft 1s;
        -moz-animation: bounceInLeft 1s;
        -ms-animation: bounceInLeft 1s;
        animation: bounceInLeft 1s; 
    }
</style>


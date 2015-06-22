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
    <link rel="stylesheet" href="css/bootstrap.css">
    <link rel="stylesheet" href="css/BSF/flat-ui.css">
    <link rel="stylesheet" href="css/formcss.css">
    <link rel="stylesheet" href="css/style.css">
    <script type="text/javascript" src="js/jqueryui/jquery-ui.js"></script>
    <script type="text/javascript" src="js/AngularJS/angular.min.js"></script>
    <script type="text/javascript" src="js/AngularJS/angular-animate.min.js"></script>
    <script type="text/javascript" src="js/Bootstrap/bootstrap.min.js"></script>
    <script type="text/javascript" src="js/AngularJS/Controller/angularModule.js"></script>
    <script type="text/javascript" src="js/Ajax_cmd.js"></script>
    
</head>    
<body ng-app="module">
<div style="width:50%;">
        <div class="section col-lg-5" id="section1" >
            
            <div class="signup-form col-lg-3 inscription" ng-controller="Inscription" >
                <h4>Inscrivez vous en quelque seconde!</h4>

                <form method="post" accept-charset="utf-8" name="InscriptionForm" id="t_utilisateurInscription" class="form-wrapper-01" action="#">
                    <input type="text" name="user_nom" placeholder="Nom" id="user_nom" class="form-control inscription_input" ng-model="user_nom" ng-pattern="expText" required="required">
                    <span class="error ng-hide" ng-show="InscriptionForm.user_nom.$dirty && InscriptionForm.user_nom.$invalid">
                        <span ng-show="InscriptionForm.user_nom.$error.required">Nom requis</span>
                        <span ng-show="InscriptionForm.user_nom.$error.pattern" class="ng-hide">Nom incorrect</span> 
                    </span>

                    <input type="text" name="user_prenom" placeholder="Prenom" id="user_prenom" ng-model="user_prenom" class="form-control inscription_input" ng-pattern="expText" required="required">
                    <span class="error" ng-show="InscriptionForm.user_prenom.$dirty && InscriptionForm.user_prenom.$invalid">
                        <span ng-show="InscriptionForm.user_prenom.$error.required">Prenom requis</span>
                        <span ng-show="InscriptionForm.user_prenom.$error.pattern" class="ng-hide">Prenom incorrect</span> 
                    </span>

                    <input type="text" name="mail" placeholder="M@il" id="user_mail" ng-model="mail" ng-pattern="expMail" class="form-control inscription_input" required="required">
                    <span class="error" ng-show="InscriptionForm.mail.$dirty && InscriptionForm.mail.$invalid">
                        <span ng-show="InscriptionForm.mail.$error.required">Mail requis</span>
                        <span ng-show="InscriptionForm.mail.$error.pattern" class="ng-hide">Mail incorrect</span> 
                    </span>
                      
                    <input type="password" name="password" placeholder="Mot de Passe" id="user_mot_de_passe" ng-model="password" ng-pattern="expMDP" required="required" class="form-control inscription_input">
                    <span class="error" ng-show="InscriptionForm.password.$dirty && InscriptionForm.password.$invalid">
                        <span ng-show="InscriptionForm.password.$error.required">Mot de passe requis</span>
                        <span ng-show="InscriptionForm.password.$error.pattern" class="ng-hide">6 caractere obligatoire</span> 
                    </span>
                      
                    <input type="password" name="confirmPassword" placeholder="Confirmer Mot de Passe" id="verif_mdp" ng-model="confirmPassword" required="required" class="form-control inscription_input" equals-to="InscriptionForm.password">
                    <span class="error" ng-show="InscriptionForm.confirmPassword.$dirty && InscriptionForm.confirmPassword.$invalid">
                        <span ng-show="InscriptionForm.confirmPassword.$error.required">Mot de passe requis</span>
                        <span ng-show="InscriptionForm.confirmPassword.$error.equalsTo" class="ng-hide">Mot de passe incorrect</span> 
                    </span>
                   <input type="submit" class="btn btn-default" style="width: 100%" id="submitInscription" value="Inscriptions" ng-disabled="InscriptionForm.$invalid">
                </form>   
        </div>
    </div>
</div>
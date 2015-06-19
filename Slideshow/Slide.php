<?php

$req="select document.Id as IdDoc,document.TargetedCountry,slideshow.Img,slideshow.Link,document.`Name`,document.StartDate,documentation_note.EFMAComment2 from slideshow INNER JOIN document ON document.Id=slideshow.IdDoc INNER JOIN documentation_note ON documentation_note.EFMAProductID=slideshow.IdDoc where (documentation_note.EFMAType='Article Efmag Chapo' OR documentation_note.EFMAType='Article Chapo') And document.Id<>'1-14L9CM' And document.Id<>'1-14L9FJ' order by Ordre limit 3;";
$execReq=$this->db->query($req);
$tabSlide=$execReq->result_array();
$topics1=$this->init_pages->getTopicsEvent($tabSlide[0]["IdDoc"]);
$topics2=$this->init_pages->getTopicsEvent($tabSlide[1]["IdDoc"]);
$topics3=$this->init_pages->getTopicsEvent($tabSlide[2]["IdDoc"]);

?>

<div id="slideshow">                                                                                                                                     
  <div id="testSlide">
      <ul class="ui-tabs-nav2">
        <li class="ui-tabs-nav2-item ui-tabs-nav2-item1 ui-tabs-selected" id="img-1"><a target="_blank" href="<?php echo $tabSlide[0]['Link'];?>"><span><strong><?php echo $tabSlide[0]['Name'];?></strong><br /><?php if($tabSlide[0]['TargetedCountry']!="") echo $tabSlide[0]['TargetedCountry'].' ';?></span></a><div style="float:left;"></div></li>
        <li class="ui-tabs-nav2-item ui-tabs-nav2-item2 ui-tabs-no-selected" id="img-2"><a target="_blank" href="<?php echo $tabSlide[1]['Link'];?>"><span><strong><?php echo $tabSlide[1]['Name'];?></strong><br /><?php if($tabSlide[1]['TargetedCountry']!="") echo $tabSlide[1]['TargetedCountry'];?></span></a><div style="float:left;"></div></li>
        <li class="ui-tabs-nav2-item ui-tabs-nav2-item3 ui-tabs-no-selected" id="img-3"><a target="_blank" href="<?php echo $tabSlide[2]['Link'];?>"><span><strong><?php echo $tabSlide[2]['Name'];?></strong><br /><?php if($tabSlide[2]['TargetedCountry']!="") echo $tabSlide[2]['TargetedCountry'];?></span></a><div style="float:left;"></div></li>
      </ul>
      
      <div id="fragment1" class="ui-tabs-panel active">
      <a target="_blank" href="<?php echo $tabSlide[0]['Link'];?>">
        <img src="<?php echo $tabSlide[0]['Img'];?>" alt="<?php echo $tabSlide[0]['IdDoc'];?>" />
      </a>  
      </div>
      
      <div id="fragment2" class="ui-tabs-panel ui-tabs-hide">
      <a target="_blank" href="<?php echo $tabSlide[1]['Link'];?>">
        <img src="<?php echo $tabSlide[1]['Img'];?>" alt="<?php echo $tabSlide[1]['IdDoc'];?>" />
      </a>  
      </div> 
      
      <div id="fragment3" class="ui-tabs-panel ui-tabs-hide">
        <a target="_blank" href="<?php echo $tabSlide[2]['Link'];?>">
        <img src="<?php echo $tabSlide[2]['Img'];?>" alt="<?php echo $tabSlide[2]['IdDoc'];?>" />
        </a>
      </div>  
	</div>
</div>
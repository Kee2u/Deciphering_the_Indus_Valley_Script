var canvas = d3.select("#my_dataviz").append("svg")
    .attr("width", 700)
    .attr("height", 500)
    .append("g")
      .attr("transform", "translate(50,50)");

  var tree = d3.layout.cluster()
    .size([400, 400]);

  d3.json("https://raw.githubusercontent.com/Kee2u/Deciphering_the_Indus_Valley_Script/main/Statistical_Analysis/Segmentation_tree.json", function (data) {

    var nodes = tree.nodes(data);
    var links = tree.links(nodes);

    var node = canvas.selectAll(".node")
      .data(nodes)
      .enter()
      .append("g")
        .attr("class", "node")
        .attr("transform", function (d) { return "translate(" +d.y + "," + d.x + ")"; });
        

    node.append("circle")
      .attr("r", 5)
      .style("fill", "#69b3a2")
      .attr("stroke", "69b3a2")
      .style("stroke-width", 2)
      
    node.append("text")
    	.attr("dy", ".35em")
      .text(function(d) { return d.name; })
      .attr("x", function(d){ return 15})
      .style("stroke", "white")
      
    node.append("text")
    	.attr("dy", "-1em")
      .text(function(d) { return d.tname; })
      .attr("x", function(d){ return -15})
      .style("font-size", "13px")
      .style("stroke", "white")
		
    node.append("svg:image")
    	.attr("xlink:href",  function(d) { return d.image;})
      .attr("width", 20)
      .attr("height", 20)
      .attr("x", 95)
      .attr("y",-10);
    
    var diagonal = d3.svg.diagonal()
    	.projection(function (d) { return [d.y, d.x]; });
    
      
    canvas.selectAll(".link")
    	.data(links)
      .enter()
      .append("path")
      .attr("class", "link")
      .attr("fill", "none")
      .attr("stroke", "#ADADAD")
      .attr("d", diagonal);
  })
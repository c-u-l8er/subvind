// @ts-nocheck
var Machine = Machine || {};

Machine.init = function(name) {
  try {
    if (typeof MatterWrap !== 'undefined') {
      // either use by name from plugin registry (Browser global)
      Matter.use('matter-wrap');
    } else {
      // or require and use the plugin directly (Node.js, Webpack etc.)
      Matter.use(require('matter-wrap'));
    }
  } catch (e) {
    // could not require the plugin or install needed
  }
  
  var Engine = Matter.Engine;
  var Render = Matter.Render;
  var Runner = Matter.Runner;
  var Composite = Matter.Composite;
  var Composites = Matter.Composites;
  var Common = Matter.Common;
  var MouseConstraint = Matter.MouseConstraint;
  var Mouse = Matter.Mouse;
  var Bodies = Matter.Bodies;

  // create engine
  var engine = Engine.create();
  var world = engine.world;

  // create renderer
  var render = Render.create({
    element: document.getElementById(name),
    engine: engine,
    options: {
      width: 1000,
      height: 1000,
      wireframes: false,
      background: "#000",
    }
  });

  Render.run(render);

  // create runner
  var runner = Runner.create();
  Runner.run(runner, engine);

  // add red circles
  var redStack = Composites.stack(-650, -2000, 5, 5, 10, 10, function(x, y) {
    return Bodies.circle(x, y, 10, { friction: 0.00001, restitution: 0.5, density: 0.001, render: { fillStyle: 'red' } });
  });

  // add green circles
  var greenStack = Composites.stack(-350, -2000, 5, 5, 10, 10, function(x, y) {
    return Bodies.circle(x, y, 10, { friction: 0.00001, restitution: 0.5, density: 0.001, render: { fillStyle: 'green' } });
  });

  // add blue circles
  var blueStack = Composites.stack(200, -2000, 5, 5, 10, 10, function(x, y) {
    return Bodies.circle(x, y, 10, { friction: 0.00001, restitution: 0.5, density: 0.001, render: { fillStyle: 'blue' } });
  });

  // add yellow circles
  var yellowStack = Composites.stack(500, -2000, 5, 5, 10, 10, function(x, y) {
    return Bodies.circle(x, y, 10, { friction: 0.00001, restitution: 0.5, density: 0.001, render: { fillStyle: 'yellow' } });
  });

  // apply stacks of circles
  Composite.add(world, redStack);
  Composite.add(world, greenStack);
  Composite.add(world, blueStack);
  Composite.add(world, yellowStack);
  
  // add hole shot
  Composite.add(world, [
    Bodies.rectangle(-400, -1500, 750, 100, { isStatic: true, angle: Math.PI * 0.06, render: { fillStyle: '#fff' } }),
    Bodies.rectangle(400, -1500, 750, 100, { isStatic: true, angle: -Math.PI * 0.06, render: { fillStyle: '#fff' } })
  ]);

  // add bumpers
  Composite.add(world, [
    Bodies.rectangle(-500, -1000, 100, 1000, { isStatic: true, render: { fillStyle: '#fff' } }),
    Bodies.rectangle(500, -1000, 100, 1000, { isStatic: true, render: { fillStyle: '#fff' } })
  ]);

  // add pins
  Composite.add(world, [
    Bodies.circle(0, -1000, 75, { isStatic: true, render: { fillStyle: 'white' }} ),
    Bodies.rectangle(0, -750, 2, 500, { isStatic: true, render: { fillStyle: '#white' } }),
    Bodies.circle(-250, -750, 75, { isStatic: true, render: { fillStyle: 'white' }} ),
    Bodies.rectangle(-250, -600, 2, 200, { isStatic: true, render: { fillStyle: '#white' } }),
    Bodies.circle(250, -750, 75, { isStatic: true, render: { fillStyle: 'white' }} ),
    Bodies.rectangle(250, -600, 2, 200, { isStatic: true, render: { fillStyle: '#white' } }),
  ])

  // add mouse control
  var mouse = Mouse.create(render.canvas)
  var mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false
        }
      }
    });

  // disable mouse croll
  mouseConstraint.mouse.element.removeEventListener("mousewheel", mouseConstraint.mouse.mousewheel);
  mouseConstraint.mouse.element.removeEventListener("DOMMouseScroll", mouseConstraint.mouse.mousewheel);

  // apply mouse constraint
  Composite.add(world, mouseConstraint);

  // keep the mouse in sync with rendering
  render.mouse = mouse;

  // fit the render viewport to the scene
  Render.lookAt(render, Composite.allBodies(world));

  // wrapping using matter-wrap plugin
  for (var i = 0; i < redStack.bodies.length; i += 1) {
    redStack.bodies[i].plugin.wrap = {
      min: { x: render.bounds.min.x, y: render.bounds.min.y },
      max: { x: render.bounds.max.x, y: render.bounds.max.y }
    };
  }
  for (var i = 0; i < greenStack.bodies.length; i += 1) {
    greenStack.bodies[i].plugin.wrap = {
      min: { x: render.bounds.min.x, y: render.bounds.min.y },
      max: { x: render.bounds.max.x, y: render.bounds.max.y }
    };
  }
  for (var i = 0; i < blueStack.bodies.length; i += 1) {
    blueStack.bodies[i].plugin.wrap = {
      min: { x: render.bounds.min.x, y: render.bounds.min.y },
      max: { x: render.bounds.max.x, y: render.bounds.max.y }
    };
  }
  for (var i = 0; i < yellowStack.bodies.length; i += 1) {
    yellowStack.bodies[i].plugin.wrap = {
      min: { x: render.bounds.min.x, y: render.bounds.min.y },
      max: { x: render.bounds.max.x, y: render.bounds.max.y }
    };
  }

  // context for MatterTools.Demo
  return {
    name: name,
    engine: engine,
    runner: runner,
    render: render,
    canvas: render.canvas,
    stop: function() {
      Matter.Render.stop(render);
      Matter.Runner.stop(runner);
    },
    start: function() {
      Matter.Render.run(render);
      Matter.Runner.run(runner, engine);
    },
    pause: function() {
      Matter.Render.stop(render);
      Matter.Runner.stop(runner);
    }
  };
};

export default Machine
// @ts-nocheck
var Machine = Machine || {};

Machine.init = function(name, environment) {
  console.log('environment', environment)

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
  var Events = Matter.Events;

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

  // define our categories (as bit fields, there are up to 32 available)
  var defaultCategory = 0x0001;
  var firstSensorCategory = 0x0002;
  var secondSensorCategory = 0x0003;
  var thirdSensorCategory = 0x0004;
  var fourthSensorCategory = 0x0005;
  var ballsCategory = 0x0006;

  // add red circles
  let redCount = 0
  let t = environment.t.count / 5
  let T = environment.t.color
  var redStack = Composites.stack(-650, -2000, 5, t, 10, 10, function(x, y) {
    redCount++
    return Bodies.circle(x, y, 10, 
      { 
        label: redCount,
        friction: 0.00001, restitution: 0.5, density: 0.001, render: { fillStyle: T },
        collisionFilter: {
          category: ballsCategory,
          mask: defaultCategory | ballsCategory
        }
      },
    );
  });

  // add green circles
  let greenCount = 0
  let c = environment.c.count / 5
  let C = environment.c.color
  var greenStack = Composites.stack(-350, -2000, 5, c, 10, 10, function(x, y) {
    greenCount++
    return Bodies.circle(x, y, 10,
      { 
        label: redCount + greenCount,
        friction: 0.00001, restitution: 0.5, density: 0.001, render: { fillStyle: C },
        collisionFilter: {
          category: ballsCategory,
          mask: defaultCategory | ballsCategory
        }
      },
    );
  });

  // add blue circles
  let blueCount = 0
  let g = environment.g.count / 5
  let G = environment.g.color
  var blueStack = Composites.stack(200, -2000, 5, g, 10, 10, function(x, y) {
    blueCount++
    return Bodies.circle(x, y, 10,
      {
        label: redCount + greenCount + blueCount,
        friction: 0.00001, restitution: 0.5, density: 0.001, render: { fillStyle: G },
        collisionFilter: {
          category: ballsCategory,
          mask: defaultCategory | ballsCategory
        }
      },
    );
  });

  // add yellow circles
  let yellowCount = 0
  let a = environment.a.count / 5
  let A = environment.a.color
  var yellowStack = Composites.stack(500, -2000, 5, a, 10, 10, function(x, y) {
    yellowCount++
    return Bodies.circle(x, y, 10,
      { 
        label: redCount + greenCount + blueCount + yellowCount,
        friction: 0.00001, restitution: 0.5, density: 0.001, render: { fillStyle: A },
        collisionFilter: {
          category: ballsCategory,
          mask: defaultCategory | ballsCategory
        }
      }
    );
  });

  // apply stacks of circles
  Composite.add(world, redStack);
  Composite.add(world, greenStack);
  Composite.add(world, blueStack);
  Composite.add(world, yellowStack);
  
  // add hole shot
  Composite.add(world, [
    Bodies.rectangle(-400, -1500, 750, 100, 
      {
        isStatic: true, angle: Math.PI * 0.06, render: { fillStyle: '#fff' },
        collisionFilter: {
          category: defaultCategory
        },
      },
    ),
    Bodies.rectangle(400, -1500, 750, 100,
      { 
        isStatic: true, angle: -Math.PI * 0.06, render: { fillStyle: '#fff' },
        collisionFilter: {
          category: defaultCategory
        },
      },
    )
  ]);

  // add bumpers
  Composite.add(world, [
    Bodies.rectangle(-500, -1000, 100, 1000,
      {
        isStatic: true, render: { fillStyle: '#fff' },
        collisionFilter: {
          category: defaultCategory
        }
      },
    ),
    Bodies.rectangle(500, -1000, 100, 1000, 
      { 
        isStatic: true, render: { fillStyle: '#fff' },
        collisionFilter: {
          category: defaultCategory
        }
      },
    )
  ]);

  // add pins
  Composite.add(world, [
    Bodies.circle(0, -1000, 75, { isStatic: true, render: { fillStyle: 'white' }, collisionFilter: { category: defaultCategory } }),
    Bodies.rectangle(0, -750, 2, 500, { isStatic: true, render: { fillStyle: '#white' }, collisionFilter: { category: defaultCategory } }),
    Bodies.circle(-250, -750, 75, { isStatic: true, render: { fillStyle: 'white' }, collisionFilter: { category: defaultCategory } }),
    Bodies.rectangle(-250, -600, 2, 200, { isStatic: true, render: { fillStyle: '#white' }, collisionFilter: { category: defaultCategory } }),
    Bodies.circle(250, -750, 75, { isStatic: true, render: { fillStyle: 'white' }, collisionFilter: { category: defaultCategory } }),
    Bodies.rectangle(250, -600, 2, 200, { isStatic: true, render: { fillStyle: '#white' }, collisionFilter: { category: defaultCategory } }),
  ])

  // add sensors
  let one = Bodies.rectangle(-351, -525, 180, 50,
    {
      isStatic: true, isSensor: true, render: { fillStyle: '#666' },
      collisionFilter: {
        category: firstSensorCategory,
        mask: ballsCategory
      }
    }
  )
  let two = Bodies.rectangle(-125, -525, 230, 50, 
    { 
      isStatic: true, isSensor: true, render: { fillStyle: '#666' },
      collisionFilter: {
        category: secondSensorCategory,
        mask: ballsCategory
      }
    },
  )
  let three = Bodies.rectangle(125, -525, 230, 50, 
    { 
      isStatic: true, isSensor: true, render: { fillStyle: '#666' },
      collisionFilter: {
        category: secondSensorCategory,
        mask: ballsCategory
      }
    },
  )
  let four = Bodies.rectangle(351, -525, 180, 50, 
    { 
      isStatic: true, isSensor: true, render: { fillStyle: '#666' },
      collisionFilter: {
        category: secondSensorCategory,
        mask: ballsCategory
      }
    },
  )
  Composite.add(world, [one, two, three, four])

  // collect reports for statistics
  let stats = []

  // detect balls that cross over sensors
  Events.on(engine, 'collisionStart', function(event) {
    var pairs = event.pairs;

    let sensors = pairs.filter((value, index) => {
      if (value.bodyB === one || value.bodyB === two || value.bodyB === three || value.bodyB === four) {
        return true
      } else {
        return false
      }
    })

    // change object colours to show those starting a collision
    for (var i = 0; i < sensors.length; i++) {
      var sensor = sensors[i];

      let orbit
      if (sensor.bodyB === one) {
        orbit = 0
      } else if (sensor.bodyB === two) {
        orbit = 1
      } else if (sensor.bodyB === three) {
        orbit = 2
      } else if (sensor.bodyB === four) {
        orbit = 3
      }

      let color
      if (sensor.bodyA.render.fillStyle === T) {
        color = T
      } else if (sensor.bodyA.render.fillStyle === C) {
        color = C
      } else if (sensor.bodyA.render.fillStyle === G) {
        color = G
      } else if (sensor.bodyA.render.fillStyle === A) {
        color = A
      }
      
      let number = sensor.bodyA.label
      let spin = sensor.bodyA.angle

      let report = { orbit, color, number, spin }
      stats.push(report)

      // note:
      // sometimes sensors record the same ball twice
      // so force duplicate reports to default on first 
    }
  });

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

  // disable mouse scroll
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
    },
    stats: function() {
      let report = JSON.parse(JSON.stringify(stats)) // copy
      stats = [] // keep memory clean
      return report
      // return [
      //   {
      //     sensor: 4,
      //     color: 'red',
      //     ball: 1
      //   },
      //   {
      //     sensor: 2,
      //     color: 'red',
      //     ball: 2
      //   },
      //   {
      //     sensor: 1,
      //     color: 'green',
      //     ball: 3
      //   },
      // ]
    }
  };
};

export default Machine
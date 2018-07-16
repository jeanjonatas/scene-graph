var colors = {
	white: [1., 1., 1., 1.],
	black: [0., 0., 0., 1.],
	red: [1., 0., 0., 1.],
	blue: [0., 0., 1., 1.],
	green: [0., 1., 0., 1.],
	yellow: [1., 1., 0., 1.],
	cyan: [0., 1., 1., 1.],
	magent: [1., 0., 1., 1.]
};

function scene(prog, stack, state, primitive)
{
	let top = [];
	
	
	//CuboMaior
	top = stack.push();
	mat4.scale(top, top, [1.5, 1.3, .5]);
	mat4.translate(top, top, [0, -.5, 0]);
	mat4.rotateY(top, top, glMatrix.toRadian(45));
	mat4.rotateZ(top, top, glMatrix.toRadian(20));
	mat4.rotateX(top, top, glMatrix.toRadian(20));
	gl.uniformMatrix4fv(prog.model, false, top);
	
	gl.uniform4fv(prog.color, [.3, .6, .2, 1]);
	primitive.solid(primitive.cube);
	gl.uniform4fv(prog.color, colors.white);
	primitive.wireframe(primitive.cube);
	stack.pop();
	
	// Cubo
	top = stack.push();
	mat4.scale(top, top, [.8, .8, .5]);
	mat4.translate(top, top, [-2.5, -3, -1.8]);
	mat4.rotateY(top, top, glMatrix.toRadian(45));
	mat4.rotateZ(top, top, glMatrix.toRadian(20));
	mat4.rotateX(top, top, glMatrix.toRadian(20));
	gl.uniformMatrix4fv(prog.model, false, top);
	
	gl.uniform4fv(prog.color, [.7, .2, .6, 1]);
	primitive.solid(primitive.cube);
	gl.uniform4fv(prog.color, colors.black);
	primitive.wireframe(primitive.cube);

	top = stack.pop();
	
	// Esfera
	top = stack.push();
	mat4.scale(top, top, [.5, .5, .6]);
	mat4.translate(top, top, [-2.1, 1.5, 0]);
	gl.uniformMatrix4fv(prog.model, false, top);
	
	gl.uniform4fv(prog.color, colors.yellow);
	primitive.solid(primitive.sphere);
	gl.uniform4fv(prog.color, colors.white);
	primitive.wireframe(primitive.sphere);

	top = stack.pop();

	// Esfera maior
	top = stack.push();
	mat4.scale(top, top, [.5, .5, .6]);
	mat4.translate(top, top, [-2.1, 1.5, 0]);
	gl.uniformMatrix4fv(prog.model, false, top);
	
	gl.uniform4fv(prog.color, colors.cyan);
	primitive.solid(primitive.sphere);
	gl.uniform4fv(prog.color, colors.white);
	primitive.wireframe(primitive.sphere);

	top = stack.pop();

	// Piramide

	top = stack.top();
	mat4.translate(top, top, [0.9, .9, 0]);
	mat4.scale(top, top, [.8, .4, .6]);
	//mat4.rotateZ(top, top, glMatrix.toRadian(-120));
	mat4.rotateY(top, top, glMatrix.toRadian(-12));
	mat4.rotateX(top, top, glMatrix.toRadian(305));
	gl.uniformMatrix4fv(prog.model, false, top);
	
	gl.uniform4fv(prog.color, colors.red);
	primitive.solid(primitive.hollow_pyramid);
	gl.uniform4fv(prog.color, colors.white);
	primitive.wireframe(primitive.hollow_pyramid);

	
	stack.pop();
}


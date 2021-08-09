define(["exports","./GeometryOffsetAttribute-def3b741","./Transforms-a73b3b3b","./Cartesian2-8417ca3d","./ComponentDatatype-9204e9f6","./when-208fe5b0","./Check-d18af7c4","./GeometryAttribute-04a19cfe","./GeometryAttributes-b0b294d8","./IndexDatatype-d47ad6f6","./Math-4e53b694","./VertexFormat-e8cbf5b3"],function(t,$,tt,et,at,it,e,rt,nt,ot,mt,c){"use strict";var st=new et.Cartesian3,ut=new et.Cartesian3,lt=new et.Cartesian3,ft=new et.Cartesian3,ct=new et.Cartesian3,l=new et.Cartesian3(1,1,1),dt=Math.cos,Ct=Math.sin;function d(t){t=it.defaultValue(t,it.defaultValue.EMPTY_OBJECT);var e=it.defaultValue(t.radii,l),a=it.defaultValue(t.innerRadii,e),i=it.defaultValue(t.minimumClock,0),r=it.defaultValue(t.maximumClock,mt.CesiumMath.TWO_PI),n=it.defaultValue(t.minimumCone,0),o=it.defaultValue(t.maximumCone,mt.CesiumMath.PI),m=Math.round(it.defaultValue(t.stackPartitions,64)),s=Math.round(it.defaultValue(t.slicePartitions,64)),u=it.defaultValue(t.vertexFormat,c.VertexFormat.DEFAULT);this._radii=et.Cartesian3.clone(e),this._innerRadii=et.Cartesian3.clone(a),this._minimumClock=i,this._maximumClock=r,this._minimumCone=n,this._maximumCone=o,this._stackPartitions=m,this._slicePartitions=s,this._vertexFormat=c.VertexFormat.clone(u),this._offsetAttribute=t.offsetAttribute,this._workerName="createEllipsoidGeometry"}d.packedLength=2*et.Cartesian3.packedLength+c.VertexFormat.packedLength+7,d.pack=function(t,e,a){return a=it.defaultValue(a,0),et.Cartesian3.pack(t._radii,e,a),a+=et.Cartesian3.packedLength,et.Cartesian3.pack(t._innerRadii,e,a),a+=et.Cartesian3.packedLength,c.VertexFormat.pack(t._vertexFormat,e,a),a+=c.VertexFormat.packedLength,e[a++]=t._minimumClock,e[a++]=t._maximumClock,e[a++]=t._minimumCone,e[a++]=t._maximumCone,e[a++]=t._stackPartitions,e[a++]=t._slicePartitions,e[a]=it.defaultValue(t._offsetAttribute,-1),e};var a,C=new et.Cartesian3,p=new et.Cartesian3,y=new c.VertexFormat,_={radii:C,innerRadii:p,vertexFormat:y,minimumClock:void 0,maximumClock:void 0,minimumCone:void 0,maximumCone:void 0,stackPartitions:void 0,slicePartitions:void 0,offsetAttribute:void 0};d.unpack=function(t,e,a){e=it.defaultValue(e,0);var i=et.Cartesian3.unpack(t,e,C);e+=et.Cartesian3.packedLength;var r=et.Cartesian3.unpack(t,e,p);e+=et.Cartesian3.packedLength;var n=c.VertexFormat.unpack(t,e,y);e+=c.VertexFormat.packedLength;var o=t[e++],m=t[e++],s=t[e++],u=t[e++],l=t[e++],f=t[e++],e=t[e];return it.defined(a)?(a._radii=et.Cartesian3.clone(i,a._radii),a._innerRadii=et.Cartesian3.clone(r,a._innerRadii),a._vertexFormat=c.VertexFormat.clone(n,a._vertexFormat),a._minimumClock=o,a._maximumClock=m,a._minimumCone=s,a._maximumCone=u,a._stackPartitions=l,a._slicePartitions=f,a._offsetAttribute=-1===e?void 0:e,a):(_.minimumClock=o,_.maximumClock=m,_.minimumCone=s,_.maximumCone=u,_.stackPartitions=l,_.slicePartitions=f,_.offsetAttribute=-1===e?void 0:e,new d(_))},d.createGeometry=function(t){var e=t._radii;if(!(e.x<=0||e.y<=0||e.z<=0)){var a=t._innerRadii;if(!(a.x<=0||a.y<=0||a.z<=0)){var i=t._minimumClock,r=t._maximumClock,n=t._minimumCone,o=t._maximumCone,m=t._vertexFormat,s=t._slicePartitions+1,u=t._stackPartitions+1;(s=Math.round(s*Math.abs(r-i)/mt.CesiumMath.TWO_PI))<2&&(s=2),(u=Math.round(u*Math.abs(o-n)/mt.CesiumMath.PI))<2&&(u=2);var l=0,f=[n],c=[i];for(B=0;B<u;B++)f.push(n+B*(o-n)/(u-1));for(f.push(o),I=0;I<s;I++)c.push(i+I*(r-i)/(s-1));c.push(r);var d=f.length,C=c.length,p=0,y=1,_=a.x!==e.x||a.y!==e.y||a.z!==e.z,h=!1,b=!1,v=!1;_&&(y=2,0<n&&(h=!0,p+=s-1),o<Math.PI&&(b=!0,p+=s-1),(r-i)%mt.CesiumMath.TWO_PI?(v=!0,p+=2*(u-1)+1):p+=1);var A=C*d*y,x=new Float64Array(3*A),k=$.arrayFill(new Array(A),!1),w=$.arrayFill(new Array(A),!1),F=s*u*y,p=6*(F+p+1-(s+u)*y),P=ot.IndexDatatype.createTypedArray(F,p),g=m.normal?new Float32Array(3*A):void 0,V=m.tangent?new Float32Array(3*A):void 0,M=m.bitangent?new Float32Array(3*A):void 0,T=m.st?new Float32Array(2*A):void 0,D=new Array(d),G=new Array(d);for(B=0;B<d;B++)D[B]=Ct(f[B]),G[B]=dt(f[B]);for(var L=new Array(C),O=new Array(C),I=0;I<C;I++)O[I]=dt(c[I]),L[I]=Ct(c[I]);for(B=0;B<d;B++)for(I=0;I<C;I++)x[l++]=e.x*D[B]*O[I],x[l++]=e.y*D[B]*L[I],x[l++]=e.z*G[B];var E,z,N,R,U=A/2;if(_)for(B=0;B<d;B++)for(I=0;I<C;I++)x[l++]=a.x*D[B]*O[I],x[l++]=a.y*D[B]*L[I],x[l++]=a.z*G[B],k[U]=!0,0<B&&B!==d-1&&0!==I&&I!==C-1&&(w[U]=!0),U++;for(l=0,B=1;B<d-2;B++)for(E=B*C,z=(B+1)*C,I=1;I<C-2;I++)P[l++]=z+I,P[l++]=z+I+1,P[l++]=E+I+1,P[l++]=z+I,P[l++]=E+I+1,P[l++]=E+I;if(_)for(var S=d*C,B=1;B<d-2;B++)for(E=S+B*C,z=S+(B+1)*C,I=1;I<C-2;I++)P[l++]=z+I,P[l++]=E+I,P[l++]=E+I+1,P[l++]=z+I,P[l++]=E+I+1,P[l++]=z+I+1;if(_){if(h)for(R=d*C,B=1;B<C-2;B++)P[l++]=B,P[l++]=B+1,P[l++]=R+B+1,P[l++]=B,P[l++]=R+B+1,P[l++]=R+B;if(b)for(N=d*C-C,R=d*C*y-C,B=1;B<C-2;B++)P[l++]=N+B+1,P[l++]=N+B,P[l++]=R+B,P[l++]=N+B+1,P[l++]=R+B,P[l++]=R+B+1}if(v){for(B=1;B<d-2;B++)R=C*d+C*B,N=C*B,P[l++]=R,P[l++]=N+C,P[l++]=N,P[l++]=R,P[l++]=R+C,P[l++]=N+C;for(B=1;B<d-2;B++)R=C*d+C*(B+1)-1,N=C*(B+1)-1,P[l++]=N+C,P[l++]=R,P[l++]=N,P[l++]=N+C,P[l++]=R+C,P[l++]=R}b=new nt.GeometryAttributes;m.position&&(b.position=new rt.GeometryAttribute({componentDatatype:at.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:x}));var W=0,Y=0,J=0,X=0,Z=A/2,j=et.Ellipsoid.fromCartesian3(e),q=et.Ellipsoid.fromCartesian3(a);if(m.st||m.normal||m.tangent||m.bitangent){for(B=0;B<A;B++){var H,K=k[B]?q:j,Q=et.Cartesian3.fromArray(x,3*B,st),K=K.geodeticSurfaceNormal(Q,ut);w[B]&&et.Cartesian3.negate(K,K),m.st&&(H=et.Cartesian2.negate(K,ct),T[W++]=Math.atan2(H.y,H.x)/mt.CesiumMath.TWO_PI+.5,T[W++]=Math.asin(K.z)/Math.PI+.5),m.normal&&(g[Y++]=K.x,g[Y++]=K.y,g[Y++]=K.z),(m.tangent||m.bitangent)&&(Q=lt,H=0,k[B]&&(H=Z),H=!h&&H<=B&&B<H+2*C?et.Cartesian3.UNIT_X:et.Cartesian3.UNIT_Z,et.Cartesian3.cross(H,K,Q),et.Cartesian3.normalize(Q,Q),m.tangent&&(V[J++]=Q.x,V[J++]=Q.y,V[J++]=Q.z),m.bitangent&&(Q=et.Cartesian3.cross(K,Q,ft),et.Cartesian3.normalize(Q,Q),M[X++]=Q.x,M[X++]=Q.y,M[X++]=Q.z))}m.st&&(b.st=new rt.GeometryAttribute({componentDatatype:at.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:T})),m.normal&&(b.normal=new rt.GeometryAttribute({componentDatatype:at.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:g})),m.tangent&&(b.tangent=new rt.GeometryAttribute({componentDatatype:at.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:V})),m.bitangent&&(b.bitangent=new rt.GeometryAttribute({componentDatatype:at.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:M}))}return it.defined(t._offsetAttribute)&&(y=x.length,v=new Uint8Array(y/3),y=t._offsetAttribute===$.GeometryOffsetAttribute.NONE?0:1,$.arrayFill(v,y),b.applyOffset=new rt.GeometryAttribute({componentDatatype:at.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:v})),new rt.Geometry({attributes:b,indices:P,primitiveType:rt.PrimitiveType.TRIANGLES,boundingSphere:tt.BoundingSphere.fromEllipsoid(j),offsetAttribute:t._offsetAttribute})}}},d.getUnitEllipsoid=function(){return a=!it.defined(a)?d.createGeometry(new d({radii:new et.Cartesian3(1,1,1),vertexFormat:c.VertexFormat.POSITION_ONLY})):a},t.EllipsoidGeometry=d});
